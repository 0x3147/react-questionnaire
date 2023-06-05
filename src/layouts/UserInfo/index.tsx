import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  return (
    <div>
      <Link to={LOGIN_PATH}>登录</Link>
    </div>
  )
}

export default memo(UserInfo)
