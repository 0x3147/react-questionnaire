import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './EditHeader.module.scss'
import { Button, Typography, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 编辑问卷页头部组件
 * @Author bk0x114
 * @Date 2023-06-28 16:34:12
 */
const EditHeader: FC<IProps> = () => {
  const nav = useNavigate()

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button
              type="link"
              icon={<LeftOutlined rev={undefined} />}
              onClick={() => nav(-1)}
            >
              返回
            </Button>
            <Title>问卷标题</Title>
          </Space>
        </div>
        <div className={styles.center}>中</div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default memo(EditHeader)
