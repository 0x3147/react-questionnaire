import React from 'react'
import styles from './QuestionCard.module.scss'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Space, Divider, Tag } from 'antd'
import {
  EditOutlined,
  PieChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined
} from '@ant-design/icons'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  _id: string
  title: string
  isPublished: boolean
  isStart: boolean
  answerCount: number
  createAt: string
}

const QuestionCard: FC<IProps> = ({
  _id,
  title,
  isPublished,
  isStart,
  answerCount,
  createAt
}) => {
  const nav = useNavigate()

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
                {isStart && <StarOutlined style={{ color: 'yellow' }} rev />}
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
              <span>{createAt}</span>
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
                icon={<EditOutlined rev />}
                onClick={() => nav(`/question/list/${_id}`)}
              >
                编辑问卷
              </Button>

              <Button
                type="text"
                size="small"
                icon={<PieChartOutlined rev />}
                onClick={() => nav(`/question/stat/${_id}`)}
                disabled={!isPublished}
              >
                数据统计
              </Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Space>
              <Button size="small" icon={<StarOutlined rev />}>
                {isStart ? '取消标记' : '标记'}
              </Button>

              <Button size="small" icon={<CopyOutlined rev />}>
                复制
              </Button>

              <Button size="small" icon={<DeleteOutlined rev />}>
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
