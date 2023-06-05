import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return (
    <div>
      <p>Login</p>
    </div>
  )
}

export default memo(Login)
