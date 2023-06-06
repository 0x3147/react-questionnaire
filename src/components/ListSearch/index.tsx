import React, { memo, useEffect, useState } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'

import type { FC, ReactNode, ChangeEvent } from 'react'

interface IProps {
  children?: ReactNode
}

const { Search } = Input

/**
 * @desc 通用搜索框组件
 * @Author bk0x114
 * @Date 2023-06-06 12:46:37
 */
const ListSearch: FC<IProps> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState<string>('')

  const [searchParams] = useSearchParams()
  useEffect(() => {
    const currentValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(currentValue)
  }, [searchParams])

  /**
   * @desc 搜索框的回调
   * @Author bk0x114
   * @Date 2023-05-06 13:29:56
   * @param e 事件对象
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  /**
   * @desc 搜索框的回调
   * @Author bk0x114
   * @Date 2023-05-06 13:30:04
   * @param value 搜索框的值
   */
  const handleSearch = (value: string) => {
    console.log(value)
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`
    })
  }

  return (
    <>
      <Search
        style={{ width: 300 }}
        allowClear
        placeholder="请输入您要查找的内容~"
        onChange={handleChange}
        onSearch={handleSearch}
        enterButton
      />
    </>
  )
}

export default memo(ListSearch)
