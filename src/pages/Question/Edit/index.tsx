import React, { memo } from 'react'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import styles from './Edit.module.scss'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 问题编辑页面
 * @Author bk0x114
 * @Date 2023-06-17 14:42:20
 */
const Edit: FC<IProps> = () => {
  const { loading, data } = useLoadQuestionData()

  return (
    <div className={styles.container}>
      <div>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <div className={styles.center}>
            <div className={styles['canvas-wrapper']}>
              <div style={{ height: '900px' }}>滚动测试</div>
            </div>
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  )
}

export default memo(Edit)
