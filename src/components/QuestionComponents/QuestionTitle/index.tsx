import React, { memo } from 'react'
import { QuestionTitleDefaultProps } from './QuestionTitleStandards'
import { Typography } from 'antd'

import type { FC, ReactNode } from 'react'
import type { IQuestionTitleProps } from './QuestionTitleStandards'

interface IProps {
  children?: ReactNode
}

type currentProps = IProps & IQuestionTitleProps

const { Title } = Typography

/**
 * @desc 问卷标题组件
 * @Author bk0x114
 * @Date 2023-06-17 15:38:16
 */
const QuestionTitle: FC<currentProps> = (props: currentProps) => {
  const {
    text = '',
    level = 1,
    isCenter = false
  } = { ...QuestionTitleDefaultProps, ...props }

  /**
   * @desc 根据标题级别生成对应的字体大小
   * @Author bk0x114
   * @Date 2023-06-17 15:43:07
   * @param level 标题级别
   */
  const genFontSize = (level: number) => {
    if (level === 1) return '24px'
    if (level === 2) return '20px'
    if (level === 3) return '16px'
    return '16px'
  }

  return (
    <>
      <Title
        level={level}
        style={{
          textAlign: isCenter ? 'center' : 'start',
          fontSize: genFontSize(level)
        }}
      >
        {text}
      </Title>
    </>
  )
}

export default memo(QuestionTitle)
