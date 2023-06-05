import React, { memo } from 'react'
import styles from './ManageLayout.module.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Space, Divider } from 'antd'
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined
} from '@ant-design/icons'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ManageLayout: FC<IProps> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined rev={undefined} />}
          >
            创建问卷
          </Button>

          <Divider />

          <Button
            type={pathname === '/manage/list' ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined rev={undefined} />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>

          <Button
            type={pathname === '/manage/star' ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined rev={undefined} />}
            onClick={() => nav('/manage/star')}
          >
            标记的问卷
          </Button>

          <Button
            type={pathname === '/manage/trash' ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined rev={undefined} />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(ManageLayout)
