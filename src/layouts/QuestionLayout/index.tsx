import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import useLoadUserData from '@/hooks/useLoadUserData'
import useNavPage from '@/hooks/useNavPage'
import { Skeleton } from 'antd'

interface IProps {
  children?: ReactNode
}

const QuestionLayout: FC<IProps> = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <>
      <p>question layout</p>
      <div>{waitingUserData ? <Skeleton active /> : <Outlet />}</div>
    </>
  )
}

export default memo(QuestionLayout)
