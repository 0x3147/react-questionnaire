import React, { memo, useEffect, useState, useRef, useMemo } from 'react'
import styles from './List.module.scss'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '@/services/question'
import { useTitle, useDebounceFn, useRequest } from 'ahooks'
import { Typography, Spin, Empty, message, Affix, FloatButton } from 'antd'
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from '@/constant'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 问卷列表页
 * @Author bk0x114
 * @Date 2023-06-07 16:00:45
 */
const List: FC<IProps> = () => {
  useTitle('我的问卷')

  const bottomRef = useRef<HTMLDivElement>(null)

  const [isStart, setIsStart] = useState(false) // 是否开始加载
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const haveMore = total > list.length

  const [searchParams] = useSearchParams()
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''

  // 搜索关键字变化时，进行重置
  useEffect(() => {
    setIsStart(false)
    setList([])
    setPage(1)
    setTotal(0)
    load()
  }, [keyword])

  /**
   * @desc 执行加载异步请求
   * @Author bk0x114
   * @Date 2023-06-07 16:19:11
   */
  const actionLoadMore = async () => {
    return await getQuestionListService({
      page,
      pageSize: LIST_PAGE_SIZE,
      keyword
    })
  }

  const { loading, run: load } = useRequest(actionLoadMore, {
    manual: true,
    onSuccess: (res) => {
      const { list: qList = [], total = 0 } = res
      setList(list.concat(qList))
      setTotal(total)
      setPage(page + 1)
    },
    onError: async (err) => {
      await message.error('加载失败了~' + err.message)
    }
  })

  /**
   * @desc 触底加载更多（附加防抖）
   * @Author bk0x114
   * @Date 2023-06-07 15:46:59
   */
  const { run: isLoadMore } = useDebounceFn(
    () => {
      console.log('load more')
      const element = bottomRef.current
      if (element !== null) {
        const { bottom } = element.getBoundingClientRect()
        if (bottom <= document.body.clientHeight) {
          load()
          setIsStart(true)
        }
      }
    },
    {
      wait: 1000
    }
  )

  // 搜索关键字变化时，执行加载
  useEffect(() => {
    isLoadMore()
  }, [searchParams])

  // 有更多数据时，监听滚动事件
  useEffect(() => {
    if (haveMore) {
      window.addEventListener('scroll', isLoadMore)
    }

    return () => {
      window.removeEventListener('scroll', isLoadMore) // 组件卸载时移除事件监听
    }
  }, [searchParams, haveMore])

  /**
   * @desc 判断加载更多的内容
   * @Author bk0x114
   * @Date 2023-06-07 16:10:30
   */
  const loadingMoreContent = useMemo(() => {
    if (!isStart || loading) return <Spin />
    if (total === 0)
      return <Empty description="这里什么都没有~先去创建一些问卷吧！" />
    if (!haveMore) return <span>没有更多了，快去创建一些新的问卷吧！</span>
    return <span>正在加载更多~</span>
  }, [isStart, loading, total, haveMore])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <Affix offsetTop={20}>
            <ListSearch />
          </Affix>
        </div>
      </div>
      <div className={styles.content}>
        {list.length > 0 &&
          list.map((item: any) => <QuestionCard key={item._id} {...item} />)}
        <FloatButton.BackTop />
      </div>
      <div className={styles.footer}>
        <div ref={bottomRef}>{loadingMoreContent}</div>
      </div>
    </>
  )
}

export default memo(List)
