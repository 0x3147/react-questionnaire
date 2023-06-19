import React, { memo } from 'react'
import { Spin } from 'antd'
import styles from './EditCanvas.module.scss'
import useGetComponentsInfo from '@/hooks/useGetComponentsInfo'
import { getComponentConfig } from '@/components/QuestionComponents'

import type { IComponentInfo } from '@/store/module/componentReducers'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  loading: boolean
}

/**
 * @desc 生成组件
 * @Author bk0x114
 * @Date 2023-06-19 15:25:47
 * @param componentInfo 组件信息
 */
const generateComponent = (componentInfo: IComponentInfo) => {
  const { type, props } = componentInfo
  const componentConfig = getComponentConfig(type)
  if (componentConfig === null) return null
  const { Component } = componentConfig!
  return <Component {...props} />
}

/**
 * @desc 问题编辑画布组件
 * @Author bk0x114
 * @Date 2023-06-17 16:05:08
 */
const EditCanvas: FC<IProps> = ({ loading }) => {
  const { componentList } = useGetComponentsInfo()

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Spin />
      </div>
    )
  }

  return (
    <div className={styles.canvas}>
      {componentList.map((item) => {
        const { fe_id } = item
        return (
          <div className={styles['component-wrapper']} key={fe_id}>
            <div className={styles.component}>{generateComponent(item)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(EditCanvas)
