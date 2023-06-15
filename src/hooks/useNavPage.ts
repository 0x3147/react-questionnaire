import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useGetUserInfo from '@/hooks/useGetUserInfo'
import {
  isLoginOrRegisterPath,
  isNoNeedUserInfoPath,
  LOGIN_PATH,
  MANAGE_INDEX_PATH
} from '@/router'

const useNavPage = (waitingUserData: boolean) => {
  const nav = useNavigate()
  const { username } = useGetUserInfo()
  const { pathname } = useLocation()

  useEffect(() => {
    if (waitingUserData) return
    if (username) {
      if (isLoginOrRegisterPath(pathname)) {
        nav(MANAGE_INDEX_PATH)
      }
      return
    }
    if (isNoNeedUserInfoPath(pathname)) {
      return
    } else {
      nav(LOGIN_PATH)
    }
  }, [waitingUserData, username, pathname])
}

export default useNavPage
