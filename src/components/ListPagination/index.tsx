import React, { memo, useEffect, useState } from 'react'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { Pagination } from 'antd'
import {
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE,
  LIST_PAGE_SIZE_PARAM_KEY
} from '@/constant'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  total: number
}

/**
 * @desc 分页组件
 * @Author bk0x114
 * @Date 2023-06-07 12:46:36
 */
const ListPagination: FC<IProps> = ({ total }) => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE)

  // 从路由url中获取参数
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
    setCurrent(page)
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
      LIST_PAGE_SIZE
    setPageSize(pageSize)
  }, [searchParams])

  /**
   * @desc 改变分页回调
   * @Author bk0x114
   * @Date 2023-06-07 13:15:56
   * @param page 页码
   * @param pageSize 每页数量
   */
  const handlePageChange = (page: number, pageSize: number) => {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString())
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString())
    nav({
      pathname,
      search: searchParams.toString()
    })
  }

  return (
    <>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
      />
    </>
  )
}

export default memo(ListPagination)
