import React, { memo } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_PATH } from '@/router'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = () => {
  const nav = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="哇偶~这个页面貌似飘走了~"
      extra={
        <Button type="primary" onClick={() => nav(HOME_PATH)}>
          返回首页
        </Button>
      }
    />
  )
}

export default memo(NotFound)
