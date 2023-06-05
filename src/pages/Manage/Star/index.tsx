import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Star: FC<IProps> = () => {
  return (
    <div>
      <p>Star</p>
    </div>
  )
}

export default memo(Star)
