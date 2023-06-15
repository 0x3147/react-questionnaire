import { useAppSelector } from '@/store'

/**
 * @desc 获取用户信息自定义hook
 * @Author bk0x114
 * @Date 2023-06-15 16:45:15
 */
const useGetUserInfo = () => {
  const { username, nickname } = useAppSelector((state) => state.user)
  return { username, nickname }
}

export default useGetUserInfo
