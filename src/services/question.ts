import axios from './index'

import type { IResData } from './index'

export const getQuestionService = async (id: string): Promise<IResData> => {
  const url = `/api/question/${id}`
  return (await axios.get(url)) as IResData
}

export const createQuestionsService = async (): Promise<IResData> => {
  const url = `/api/question`
  return (await axios.post(url)) as IResData
}
