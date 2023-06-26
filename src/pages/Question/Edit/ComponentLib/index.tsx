import React, { memo } from 'react'
import { componentConfigGroup } from '@/components/QuestionComponents'
import { Typography } from 'antd'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 左面板组件库组件
 * @Author bk0x114
 * @Date 2023-06-26 15:21:39
 */
const ComponentLib: FC<IProps> = () => {
  return (
    <>
      {componentConfigGroup.map(({ groupName, groupId }, index) => (
        <div key={groupId}>
          <Title
            level={3}
            style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
          >
            {groupName}
          </Title>
        </div>
      ))}
    </>
  )
}

export default memo(ComponentLib)
