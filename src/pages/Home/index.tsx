import React, { memo } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const nav = useNavigate()
  const clickHandler = () => {
    nav('/login')
  }

  return (
    <div>
      <p>home</p>
      <div>
        <button onClick={clickHandler}>登录</button>
        <Link to="/register?a=10">注册</Link>
      </div>
    </div>
  )
}

export default memo(Home)
