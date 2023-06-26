import React, { memo } from 'react'
import { Tabs } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

import type { FC, ReactNode } from 'react'
import ComponentLib from '@/pages/Question/Edit/ComponentLib'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 问题编辑页面左侧面板
 * @Author bk0x114
 * @Date 2023-06-26 14:56:19
 */
const LeftPanel: FC<IProps> = () => {
  const tabItems = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreOutlined rev={undefined} />
        </span>
      ),
      children: <ComponentLib />
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined rev={undefined} />
        </span>
      ),
      children: <div>图层</div>
    }
  ]

  return (
    <>
      <Tabs defaultActiveKey="componentLib" items={tabItems} />
    </>
  )
}

export default memo(LeftPanel)
