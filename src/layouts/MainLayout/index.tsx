import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const MainLayout: FC<IProps> = () => {
  return (
    <>
      <div>header</div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </>
  )
}

export default memo(MainLayout)
