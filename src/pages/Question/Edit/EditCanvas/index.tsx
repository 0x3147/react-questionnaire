import React, { memo } from 'react'
import { Spin } from 'antd'
import styles from './EditCanvas.module.scss'
import classNames from 'classnames'
import useGetComponentsInfo from '@/hooks/useGetComponentsInfo'
import { getComponentConfig } from '@/components/QuestionComponents'
import { useAppDispatch } from '@/store'
import { changeSelectedId } from '@/store/module/componentReducers'

import type { IComponentInfo } from '@/store/module/componentReducers'
import type { FC, ReactNode, MouseEvent } from 'react'

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
  const dispatch = useAppDispatch()

  const { componentList, selectedId } = useGetComponentsInfo()

  /**
   * @desc 点击组件触发
   * @Author bk0x114
   * @Date 2023-06-19 15:44:00
   * @param id 组件id
   * @param e 事件对象
   */
  const handleClick = (e: MouseEvent, id: string) => {
    e.stopPropagation() // 阻止冒泡
    dispatch(changeSelectedId(id))
  }

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
        const wrapperDefaultClassName = styles['component-wrapper']
        const selectedClassName = styles.selected
        const wrapperClassName = classNames({
          [wrapperDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId
        })
        return (
          <div
            className={wrapperClassName}
            key={fe_id}
            onClick={(e) => handleClick(e, fe_id)}
          >
            <div className={styles.component}>{generateComponent(item)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(EditCanvas)
