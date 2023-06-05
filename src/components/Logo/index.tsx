import React, { memo } from 'react'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

const Logo: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space>
          <Title>
            <LineChartOutlined rev />
          </Title>
          <Title>uno问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default memo(Logo)
