import React, { memo } from 'react'
import styles from './List.module.scss'
import { useTitle } from 'ahooks'
import { Typography, Spin } from 'antd'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

const List: FC<IProps> = () => {
  useTitle('我的问卷')

  const { data, loading } = useLoadQuestionListData()
  const { list = [] } = data || {}

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
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading &&
          list.length > 0 &&
          list.map((item: any) => <QuestionCard key={item._id} {...item} />)}
      </div>
      <div className={styles.footer}></div>
    </>
  )
}

export default memo(List)
