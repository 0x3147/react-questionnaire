import React, { memo, useEffect, useState } from 'react'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'
import useGetUserInfo from '@/hooks/useGetUserInfo'
import { HOME_PATH } from '@/router'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

const Logo: FC<IProps> = () => {
  const { username } = useGetUserInfo()

  const [pathName, setPathName] = useState<string>('/')

  useEffect(() => {
    if (username) {
      setPathName(HOME_PATH)
    }
  }, [pathName])

  return (
    <div className={styles.container}>
      <Link to={pathName}>
        <Space>
          <Title>
            <LineChartOutlined rev={undefined} />
          </Title>
          <Title>uno问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default memo(Logo)
