import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/store'
import useGetUserInfo from '@/hooks/useGetUserInfo'
import { fetchUserDataAction } from '@/store/module/userReducer'

/**
 * @desc 加载用户数据自定义hook
 * @Author bk0x114
 * @Date 2023-06-15 17:35:08
 */
const useLoadUserData = () => {
  const dispatch = useAppDispatch()
  const [waitingUserData, setWaitingUserData] = useState(true)

  /**
   * @desc 加载用户数据
   * @Author bk0x114
   * @Date 2023-06-15 17:44:05
   */
  const loadUserData = () => {
    dispatch(fetchUserDataAction()) // 触发异步action 获取用户数据
    setWaitingUserData(false)
  }

  const { username } = useGetUserInfo()

  useEffect(() => {
    if (username) {
      setWaitingUserData(false) // 已有用户数据，不需要再加载了
      return
    }
    loadUserData()
  }, [username])

  return { waitingUserData }
}

export default useLoadUserData
