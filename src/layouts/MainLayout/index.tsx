import React, { memo } from 'react'
import styles from './MainLayout.module.scss'
import { Layout, Skeleton } from 'antd'
import { Outlet } from 'react-router-dom'
import Logo from '@/components/Logo'
import UserInfo from 'src/components/UserInfo'
import useLoadUserData from '@/hooks/useLoadUserData'
import useNavPage from '@/hooks/useNavPage'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Header, Footer, Content } = Layout

const MainLayout: FC<IProps> = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        {waitingUserData ? <Skeleton active /> : <Outlet />}
      </Content>
      <Footer className={styles.footer}>
        uno问卷 &copy; 2023 created by bk0x114
      </Footer>
    </Layout>
  )
}

export default memo(MainLayout)
