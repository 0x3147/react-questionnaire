import React from 'react'
import styles from './QuestionCard.module.scss'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  _id?: string
  title: string
  isPublished: boolean
  isStart: boolean
  answerCount: number
  createAt: string
}

const QuestionCard: FC<IProps> = ({
  title,
  isPublished,
  isStart,
  answerCount,
  createAt
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <a href="#">{title}</a>
          </div>
          <div className={styles.right}>
            {isPublished ? (
              <span style={{ color: 'green' }}>已发布</span>
            ) : (
              <span>未发布</span>
            )}
            &nbsp;
            <span>答卷: {answerCount}</span>
            <span>{createAt}</span>
          </div>
        </div>
        <div className={styles['button-container']}>
          <div className={styles.left}>
            <button>编辑问卷</button>
            <button>数据统计</button>
          </div>
          <div className={styles.right}>
            <button>标记</button>
            <button>复制</button>
            <button>删除</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard
