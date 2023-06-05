import React, { memo } from 'react'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATH } from '@/router'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title, Paragraph } = Typography

const Home: FC<IProps> = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>开启一个问卷调查 | 或发动一个在线投票</Title>
        <Paragraph>
          已累计创建问卷 1000 份，发布问卷 75 份，已收到完成的答卷 800份
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATH)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
