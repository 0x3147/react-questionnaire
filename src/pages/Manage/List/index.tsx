import React, { memo, useState } from 'react'
import styles from './List.module.scss'
import { useTitle } from 'ahooks'
import { Typography } from 'antd'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStart: false,
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
    isStart: false,
    answerCount: 7,
    createAt: '2021-01-01'
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStart: true,
    answerCount: 8,
    createAt: '2021-01-01'
  },
  {
    _id: 'q5',
    title: '问卷5',
    isPublished: false,
    isStart: false,
    answerCount: 10,
    createAt: '2021-01-01'
  }
]

const { Title } = Typography

const List: FC<IProps> = () => {
  useTitle('我的问卷')
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map(({ _id, ...rest }) => (
            <QuestionCard key={_id} _id={_id} {...rest} />
          ))}
      </div>
      <div className={styles.footer}></div>
    </>
  )
}

export default memo(List)
