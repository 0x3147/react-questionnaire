import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd'
import { LOGIN_PATH, REGISTER_PATH } from '@/router'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  return (
    <div>
      <Space>
        <Link to={LOGIN_PATH}>登录</Link>
        <Link to={REGISTER_PATH}>注册</Link>
      </Space>
    </div>
  )
}

export default memo(UserInfo)
