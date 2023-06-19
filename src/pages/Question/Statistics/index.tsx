import React, { memo } from 'react'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Statistics: FC<IProps> = () => {
  const { loading } = useLoadQuestionData()

  return (
    <div>
      <p>stat page</p>
    </div>
  )
}

export default memo(Statistics)
