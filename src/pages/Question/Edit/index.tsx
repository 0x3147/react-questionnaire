import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Edit: FC<IProps> = () => {
  const { id = '' } = useParams<{ id: string }>()
  return (
    <div>
      <p>Edit {id}</p>
    </div>
  )
}

export default memo(Edit)
