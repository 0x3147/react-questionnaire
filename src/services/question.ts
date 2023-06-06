import type { IRes } from './index'
import axios from './index'

interface IQuestion {
  id: string
  title: string
}

export const getQuestionService = async (
  id: string
): Promise<IRes<IQuestion>> => {
  const url = `/api/question/${id}`
  return await axios.get(url)
}
