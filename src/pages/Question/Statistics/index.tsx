import React, { memo } from 'react'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Statistics: FC<IProps> = () => {
  const { loading, data } = useLoadQuestionData()

  return (
    <div>
      <p>stat page</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default memo(Statistics)
