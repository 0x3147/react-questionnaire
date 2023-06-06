import React from 'react'
import styles from './QuestionCard.module.scss'
import { useNavigate, Link } from 'react-router-dom'
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
      onOk: async () => {
        await message.info('执行删除')
      }
    })
  }

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
                {isStar && (
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
              >
                {isStar ? '取消标记' : '标记'}
              </Button>

              <Popconfirm
                title="确定复制这个问卷吗？"
                okText="确定"
                cancelText="取消"
                onConfirm={() => alert('执行复制')}
              >
                <Button
                  size="small"
                  type="text"
                  icon={<CopyOutlined rev={undefined} />}
                >
                  复制
                </Button>
              </Popconfirm>

              <Button
                size="small"
                type="text"
                icon={<DeleteOutlined rev={undefined} />}
                onClick={handleDeleteQuestion}
              >
                删除
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard
