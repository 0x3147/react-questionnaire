import React, { memo } from 'react'
import styles from '../List/List.module.scss'
import { useTitle } from 'ahooks'
import { Typography, Empty, Spin, Affix, FloatButton } from 'antd'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'
import ListPagination from '@/components/ListPagination'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 标记问卷列表页
 * @Author bk0x114
 * @Date 2023-04-06 00:12:22
 */
const Star: FC<IProps> = () => {
  useTitle('已标记的问卷')

  const { data, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data || {}

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <Affix offsetTop={20}>
            <ListSearch />
          </Affix>
        </div>
      </div>
      <div className={styles.content}>
        {!loading && list.length === 0 && (
          <Empty description="您还没有标记问卷哦~" />
        )}
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading &&
          list.length > 0 &&
          list.map((item: any) => <QuestionCard key={item._id} {...item} />)}
        <FloatButton.BackTop />
      </div>
      <div className={styles.footer}>
        {!loading && <ListPagination total={total} />}
      </div>
    </>
  )
}

export default memo(Star)
