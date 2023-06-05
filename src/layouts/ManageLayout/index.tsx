import React, { memo } from 'react'
import styles from './ManageLayout.module.scss'
import { Outlet } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ManageLayout: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>manage left</p>
        <button>创建问卷</button>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(ManageLayout)
