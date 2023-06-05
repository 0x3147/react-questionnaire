import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Register: FC<IProps> = () => {
  return (
    <div>
      <p>Register</p>
    </div>
  )
}

export default memo(Register)
