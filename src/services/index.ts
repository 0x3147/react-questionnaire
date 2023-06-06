import axios from 'axios'
import { message } from 'antd'

import type { AxiosResponse } from 'axios'

const instance = axios.create({
  timeout: 10 * 1000
})

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

export interface IRes<T = any> {
  errno: number
  data?: IResData<T>
  msg?: string
}

export interface IResData<T = any> {
  [key: string]: T
}
