import axios from 'axios'
import { message } from 'antd'
import { getToken } from '@/utils/user-token'

import type { AxiosResponse } from 'axios'

const instance = axios.create({
  timeout: 10 * 1000
})

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${getToken()}`
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(async (res: AxiosResponse) => {
  const resData: IRes = res.data || {}
  const { errno, data, msg } = resData
  if (errno !== 0) {
    if (msg) {
      await message.error(msg)
    }
    throw new Error(msg)
  }
  return data as any
})

export default instance

export interface IRes {
  errno: number
  data?: IResData
  msg?: string
}

export interface IResData {
  [key: string]: any
}
