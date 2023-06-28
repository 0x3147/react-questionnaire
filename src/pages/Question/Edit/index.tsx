import React, { memo } from 'react'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import styles from './Edit.module.scss'
import EditCanvas from './EditCanvas'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import EditHeader from './EditHeader'
import { useAppDispatch } from '@/store'
import { changeSelectedId } from '@/store/module/componentReducers'

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
  const dispatch = useAppDispatch()

  const { loading } = useLoadQuestionData()

  const handleClearSelected = () => {
    dispatch(changeSelectedId(''))
  }

  return (
    <div className={styles.container}>
      <EditHeader />
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.center} onClick={handleClearSelected}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Edit)
