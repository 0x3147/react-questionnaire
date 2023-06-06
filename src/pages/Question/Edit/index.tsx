import React, { memo, useEffect } from 'react'
import { getQuestionService } from '@/services/question'
import { useParams } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Edit: FC<IProps> = () => {
  const { id = '' } = useParams<{ id: string }>()

  useEffect(() => {
    const fn = async () => {
      const res = await getQuestionService(id)
      console.log(res)
    }
    fn()
  }, [])

  return (
    <div>
      <p>Edit {id}</p>
    </div>
  )
}

export default memo(Edit)
