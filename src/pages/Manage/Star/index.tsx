import React, { memo, useState } from 'react'
import styles from '../List/List.module.scss'
import { useTitle } from 'ahooks'
import { Typography, Empty } from 'antd'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStart: true,
    answerCount: 5,
    createAt: '2021-01-01'
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStart: true,
    answerCount: 6,
    createAt: '2021-01-01'
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStart: true,
    answerCount: 7,
    createAt: '2021-01-01'
  }
]

/**
 * @desc 标记问卷列表页
 * @Author bk0x114
 * @Date 2023-04-06 00:12:22
 */
const Star: FC<IProps> = () => {
  useTitle('已标记的问卷')

  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && (
          <Empty description="您还没有标记问卷哦~" />
        )}
        {questionList.length > 0 &&
          questionList.map(({ _id, ...rest }) => (
            <QuestionCard key={_id} _id={_id} {...rest} />
          ))}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default memo(Star)
