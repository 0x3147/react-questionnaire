import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Statistics: FC<IProps> = () => {
  return (
    <div>
      <p>Stat</p>
    </div>
  )
}

export default memo(Statistics)
