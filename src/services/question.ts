import axios from './index'

import type { IResData } from './index'

export interface ISearchOption {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  page: number
  pageSize: number
}

/**
 * @desc 获取单个问卷详情
 * @Author bk0x114
 * @Date 2023-04-06 23:08:03
 * @param id 问卷id
 */
export const getQuestionService = async (id: string): Promise<IResData> => {
  const url = `/api/question/${id}`
  return (await axios.get(url)) as IResData
}

/**
 * @desc 创建问卷
 * @Author bk0x114
 * @Date 2023-04-06 23:08:28
 */
export const createQuestionsService = async (): Promise<IResData> => {
  const url = `/api/question`
  return (await axios.post(url)) as IResData
}

/**
 * @desc 获取问卷列表
 * @Author bk0x114
 * @Date 2023-04-06 23:08:37
 * @param option 搜索选项
 */
export const getQuestionListService = async (
  option: Partial<ISearchOption> = {}
): Promise<IResData> => {
  const url = '/api/question'
  return (await axios.get(url, { params: option })) as IResData
}

/**
 * @desc 更新问卷
 * @Author bk0x114
 * @Date 2023-06-08 12:18:30
 * @param id 问卷id
 * @param option 问卷信息
 */
export const updateQuestionService = async (
  id: string,
  option: { [key: string]: any }
): Promise<IResData> => {
  const url = `/api/question/starOrRemove/${id}`
  return (await axios.post(url, option)) as IResData
}

/**
 * @desc 复制问卷
 * @Author bk0x114
 * @Date 2023-06-08 12:59:08
 * @param id 需要复制的问卷id
 */
export const duplicateQuestionService = async (
  id: string
): Promise<IResData> => {
  const url = `/api/question/duplicate/${id}`
  return (await axios.post(url)) as IResData
}
