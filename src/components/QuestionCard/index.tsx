import React, { useState } from 'react'
import styles from './QuestionCard.module.scss'
import { useNavigate, Link } from 'react-router-dom'
import {
  updateQuestionService,
  duplicateQuestionService
} from '@/services/question'
import { useRequest } from 'ahooks'
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import {
  EditOutlined,
  PieChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}

const { confirm } = Modal

/**
 * @desc 问卷卡片组件
 * @Author bk0x114
 * @Date 2023-04-06 00:02:38
 */
const QuestionCard: FC<IProps> = ({
  _id,
  title,
  isPublished,
  isStar,
  answerCount,
  createdAt
}) => {
  const nav = useNavigate()

  const [isStarStatus, setIsStarStatus] = useState(isStar)
  const [isDeletedStatus, setIsdeletedStatus] = useState(false)

  const { loading: changeStarLoading, run: changeStar } = useRequest(
    async () => {
      await updateQuestionService(_id, {
        isStar: !isStarStatus
      })
    },
    {
      manual: true,
      onSuccess: async () => {
        setIsStarStatus(!isStarStatus)
        if (!isStarStatus) {
          message.success('标记成功')
          return
        } else {
          message.success('取消标记成功')
          return
        }
      },
      onError: async (err) => {
        message.error(err.message)
      }
    }
  )

  const { loading: duplicateLoading, run: handleDuplicate } = useRequest(
    async () => {
      return await duplicateQuestionService(_id)
    },
    {
      manual: true,
      onSuccess: async (res) => {
        message.success('复制成功!')
        nav(`/question/edit/${res.id}`)
      }
    }
  )

  const { loading: deleteLoading, run: handleRemove } = useRequest(
    async () => {
      await updateQuestionService(_id, { isDeleted: true })
    },
    {
      manual: true,
      onSuccess: async () => {
        setIsdeletedStatus(true)
        message.success('已移入回收站!')
      }
    }
  )

  /**
   * @desc 删除问卷
   * @Author bk0x114
   * @Date 2023-04-05 23:58:30
   */
  const handleDeleteQuestion = () => {
    confirm({
      title: '确定删除这个问卷吗？',
      icon: <ExclamationCircleOutlined rev={undefined} />,
      okText: '确定',
      cancelText: '取消',
      content: '删除后可在回收站找回',
      onOk: () => {
        handleRemove()
      }
    })
  }

  if (isDeletedStatus) return null

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Link
              to={
                isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`
              }
            >
              <Space>
                {isStarStatus && (
                  <StarOutlined style={{ color: 'yellow' }} rev={undefined} />
                )}
                {title}
              </Space>
            </Link>
          </div>

          <div className={styles.right}>
            <Space>
              {isPublished ? (
                <Tag color="processing">已发布</Tag>
              ) : (
                <Tag>未发布</Tag>
              )}
              <span>答卷: {answerCount}</span>
              <span>{createdAt}</span>
            </Space>
          </div>
        </div>

        <Divider style={{ margin: '12px' }} />

        <div className={styles['button-container']}>
          <div className={styles.left}>
            <Space>
              <Button
                type="text"
                size="small"
                icon={<EditOutlined rev={undefined} />}
                onClick={() => nav(`/question/edit/${_id}`)}
              >
                编辑问卷
              </Button>

              <Button
                type="text"
                size="small"
                icon={<PieChartOutlined rev={undefined} />}
                onClick={() => nav(`/question/stat/${_id}`)}
                disabled={!isPublished}
              >
                数据统计
              </Button>
            </Space>
          </div>

          <div className={styles.right}>
            <Space>
              <Button
                size="small"
                type="text"
                icon={<StarOutlined rev={undefined} />}
                onClick={changeStar}
                disabled={changeStarLoading}
              >
                {isStarStatus ? '取消标记' : '标记'}
              </Button>

              <Popconfirm
                title="确定复制这个问卷吗？"
                okText="确定"
                cancelText="取消"
                onConfirm={handleDuplicate}
              >
                <Button
                  size="small"
                  type="text"
                  icon={<CopyOutlined rev={undefined} />}
                  disabled={duplicateLoading}
                >
                  复制
                </Button>
              </Popconfirm>

              <Button
                size="small"
                type="text"
                icon={<DeleteOutlined rev={undefined} />}
                onClick={handleDeleteQuestion}
                disabled={deleteLoading}
              >
                放入回收站
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard
