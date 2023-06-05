import React, { memo, useState } from 'react'
import styles from './List.module.scss'
import { useTitle } from 'ahooks'
import QuestionCard from '@/components/QuestionCard'

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

const List: FC<IProps> = () => {
  useTitle('我的问卷')
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.map(({ _id, ...rest }) => (
          <QuestionCard key={_id} {...rest} />
        ))}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default memo(List)
