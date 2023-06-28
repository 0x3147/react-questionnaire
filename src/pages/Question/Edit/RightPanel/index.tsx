import React, { memo } from 'react'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'

import type { FC, ReactNode } from 'react'
import ComponentProp from '../ComponentProp'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 组件属性面板
 * @Author bk0x114
 * @Date 2023-06-28 15:05:03
 */
const RightPanel: FC<IProps> = () => {
  const tabsItems = [
    {
      key: 'prop',
      label: (
        <span>
          <FileTextOutlined rev={undefined} />
          属性
        </span>
      ),
      children: <ComponentProp />
    },
    {
      key: 'setting',
      label: (
        <span>
          <SettingOutlined rev={undefined} />
          设置
        </span>
      ),
      children: <div>设置</div>
    }
  ]

  return (
    <>
      <Tabs defaultActiveKey="prop" items={tabsItems} />
    </>
  )
}

export default memo(RightPanel)
