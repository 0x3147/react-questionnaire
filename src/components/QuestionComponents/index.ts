import QuestionInputConfig from './QuestionInput/use'
import QuestionTitleConfig from './QuestionTitle/use'

import type { FC } from 'react'
import type { IQuestionInputProps } from './QuestionInput/use'
import type { IQuestionTitleProps } from './QuestionTitle/use'

// 组件属性类型
export type ComponentPropsType = IQuestionInputProps & IQuestionTitleProps

// 组件配置类型
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 组件配置列表
const componentsConfigList: ComponentConfigType[] = [
  QuestionInputConfig,
  QuestionTitleConfig
]

/**
 * @desc 获取组件配置
 * @Author bk0x114
 * @Date 2023-06-19 15:00:15
 * @param type 组件类型
 */
export const getComponentConfig = (type: string) => {
  return componentsConfigList.find((item) => item.type === type)
}
