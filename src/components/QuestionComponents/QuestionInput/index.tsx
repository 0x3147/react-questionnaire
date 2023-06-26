import React, { memo } from 'react'
import { QuestionInputDefaultProps } from './QuestionInputStandards'
import { Typography, Input } from 'antd'

import type { FC, ReactNode } from 'react'
import type { IQuestionInputProps } from './QuestionInputStandards'

interface IProps {
  children?: ReactNode
}

type currentProps = IProps & IQuestionInputProps

const { Paragraph } = Typography

/**
 * @desc 问卷输入框组件
 * @Author bk0x114
 * @Date 2023-06-17 15:54:46
 */
const QuestionInput: FC<currentProps> = (props: currentProps) => {
  const { title, placeholder } = {
    ...QuestionInputDefaultProps,
    ...props
  }
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder} />
      </div>
    </>
  )
}

export default memo(QuestionInput)
