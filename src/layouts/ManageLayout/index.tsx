import React, { memo, useState } from 'react'
import styles from './ManageLayout.module.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { createQuestionsService } from '@/services/question'
import { Button, Space, Divider, message, Affix } from 'antd'
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

/**
 * @desc 内容布局页
 * @Author bk0x114
 * @Date 2023-04-06 19:05:59
 */
const ManageLayout: FC<IProps> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const { loading, run: handleCreate } = useRequest(createQuestionsService, {
    manual: true,
    onSuccess: async (res) => {
      nav(`/question/edit/${res.id}`)
      message.success('创建成功')
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Affix offsetTop={20}>
          <Space direction="vertical">
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined rev={undefined} />}
              onClick={handleCreate}
              disabled={loading}
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
        </Affix>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(ManageLayout)
