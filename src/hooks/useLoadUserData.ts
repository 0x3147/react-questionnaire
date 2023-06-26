import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/store'
import useGetUserInfo from '@/hooks/useGetUserInfo'
import { useRequest } from 'ahooks'
import { getUserInfoService } from '@/services/user'
import { loginAction } from '@/store/module/userReducer'

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
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginAction({ username, nickname })) // 存储到 redux store
    },
    onFinally() {
      setWaitingUserData(false)
    }
  })

  const { username } = useGetUserInfo()

  useEffect(() => {
    if (username) {
      setWaitingUserData(false) // 已有用户数据，不需要再加载了
      return
    }
    run()
  }, [username])

  return { waitingUserData }
}

export default useLoadUserData
