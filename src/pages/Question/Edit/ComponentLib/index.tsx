import React, { memo } from 'react'
import styles from './ComponentLib.module.scss'
import { nanoid } from 'nanoid'
import { componentConfigGroup } from '@/components/QuestionComponents'
import { useAppDispatch } from '@/store'
import { addComponent } from '@/store/module/componentReducers'
import { Typography } from 'antd'

import type { FC, ReactNode } from 'react'
import type { ComponentConfigType } from '@/components/QuestionComponents'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 获取组件
 * @Author bk0x114
 * @Date 2023-06-28 13:25:46
 * @param componentConfig 组件配置
 */
const getComponent = (componentConfig: ComponentConfigType) => {
  const { title, type, Component, defaultProps } = componentConfig
  const dispatch = useAppDispatch()

  /**
   * @desc 点击添加组件至画板
   * @Author bk0x114
   * @Date 2023-06-28 13:55:01
   */
  const handClick = () => {
    dispatch(
      addComponent({
        fe_id: nanoid(),
        title,
        type,
        props: defaultProps
      })
    )
  }

  return (
    <div key={type} className={styles.wrapper} onClick={handClick}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}

/*
 * @desc 左面板组件库组件
 * @Author bk0x114
 * @Date 2023-06-26 15:21:39
 */
const ComponentLib: FC<IProps> = () => {
  return (
    <>
      {componentConfigGroup.map(({ groupName, groupId, components }, index) => (
        <div key={groupId}>
          <Title
            level={3}
            style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
          >
            {groupName}
          </Title>
          <div>{components.map((comp) => getComponent(comp))}</div>
        </div>
      ))}
    </>
  )
}

export default memo(ComponentLib)
