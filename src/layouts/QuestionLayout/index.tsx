import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const QuestionLayout: FC<IProps> = () => {
  return (
    <>
      <p>question layout</p>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default memo(QuestionLayout)
