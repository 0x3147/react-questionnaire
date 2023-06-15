import axios from './index'

import type { IResData } from './index'

/**
 * @desc 获取用户信息
 * @Author bk0x114
 * @Date 2023-06-08 16:01:21
 */
export const getUserInfoService = async (): Promise<IResData> => {
  const url = 'api/user/info'
  return (await axios.get(url)) as IResData
}

/**
 * @desc 用户注册
 * @Author bk0x114
 * @Date 2023-06-08 16:01:32
 * @param username 用户名
 * @param password 密码
 * @param nickname 昵称(可选)
 */
export const registerService = async (
  username: string,
  password: string,
  nickname?: string
): Promise<IResData> => {
  const url = 'api/user/register'
  return (await axios.post(url, {
    username,
    password,
    nickname: nickname || username
  })) as IResData
}

/**
 * @desc 用户登录
 * @Author bk0x114
 * @Date 2023-06-08 16:02:26
 * @param username 用户名
 * @param password 密码
 */
export const loginService = async (
  username: string,
  password: string
): Promise<IResData> => {
  const url = 'api/user/login'
  return (await axios.post(url, { username, password })) as IResData
}
