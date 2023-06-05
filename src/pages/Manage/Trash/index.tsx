import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Trash: FC<IProps> = () => {
  return (
    <div>
      <p>Trash</p>
    </div>
  )
}

export default memo(Trash)
