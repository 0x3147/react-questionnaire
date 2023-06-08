import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, message } from 'antd'
import { LOGIN_PATH } from '@/router'
import { useRequest } from 'ahooks'
import { getUserInfoService } from '@/services/user'
import { UserOutlined } from '@ant-design/icons'
import { removeToken } from '@/utils/user-token'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 用户信息组件
 * @Author bk0x114
 * @Date 2023-06-08 16:39:43
 */
const UserInfo: FC<IProps> = () => {
  const { data } = useRequest(getUserInfoService)
  const { username, nickname } = data || {}
  const nav = useNavigate()

  /**
   * @desc 退出登录
   * @Author bk0x114
   * @Date 2023-06-08 16:40:23
   */
  const logout = () => {
    removeToken()
    message.success('您已成功退出登录!')
    nav(LOGIN_PATH)
  }

  const UserInfoView = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined rev={undefined} />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        退出登录
      </Button>
    </>
  )

  const loginView = <Link to={LOGIN_PATH}>登录</Link>

  return <div>{username ? UserInfoView : loginView}</div>
}

export default memo(UserInfo)
