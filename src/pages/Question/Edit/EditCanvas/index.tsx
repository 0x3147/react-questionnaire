import React, { memo } from 'react'
import styles from './EditCanvas.module.scss'
// 临时
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle'
import QuestionInput from '@/components/QuestionComponents/QuestionInput'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 问题编辑画布组件
 * @Author bk0x114
 * @Date 2023-06-17 16:05:08
 */
const EditCanvas: FC<IProps> = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  )
}

export default memo(EditCanvas)
