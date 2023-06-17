import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import useLoadUserData from '@/hooks/useLoadUserData'
import useNavPage from '@/hooks/useNavPage'
import { Skeleton } from 'antd'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 问卷编辑/统计布局页
 * @Author bk0x114
 * @Date 2023-06-17 14:47:04
 */
const QuestionLayout: FC<IProps> = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <div style={{ height: '100vh' }}>
      {waitingUserData ? <Skeleton active /> : <Outlet />}
    </div>
  )
}

export default memo(QuestionLayout)
