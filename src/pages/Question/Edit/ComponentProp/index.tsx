import React, { memo } from 'react'
import useGetComponentsInfo from '@/hooks/useGetComponentsInfo'
import { getComponentConfig } from '@/components/QuestionComponents'
import { changeComponentProps } from '@/store/module/componentReducers'
import { useAppDispatch } from '@/store'

import type { FC, ReactNode } from 'react'
import type { ComponentPropsType } from '@/components/QuestionComponents'

interface IProps {
  children?: ReactNode
}

const NoProp: FC = () => <div style={{ textAlign: 'center' }}>未选中组件</div>

/**
 * @desc 组件属性面板控制组件
 * @Author bk0x114
 * @Date 2023-06-28 16:05:36
 */
const ComponentProp: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  const { selectedComponent } = useGetComponentsInfo()

  if (selectedComponent === undefined) return <NoProp />

  const { type, props } = selectedComponent

  const componentConfig = getComponentConfig(type)
  if (componentConfig === undefined) return <NoProp />
  const { PropComponent } = componentConfig

  /**
   * @desc 修改组件属性
   * @Author bk0x114
   * @Date 2023-06-28 15:59:02
   * @param newProps 新的属性
   */
  const changeProps = (newProps: ComponentPropsType) => {
    if (selectedComponent === undefined) return
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
  }

  return <PropComponent {...props} onChange={changeProps} />
}

export default memo(ComponentProp)
