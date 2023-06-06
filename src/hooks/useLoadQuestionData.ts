import { useParams } from 'react-router-dom'
import { getQuestionService } from '@/services/question'
import { useRequest } from 'ahooks'

/**
 * @desc 获取问卷数据自定义hook
 * @Author bk0x114
 * @Date 2023-05-06 19:16:09
 */
const useLoadQuestionData = () => {
  const { id = '' } = useParams<{ id: string }>()
  const load = async () => {
    return await getQuestionService(id)
  }

  const { loading, data, error } = useRequest(load)

  return { loading, data, error }
}

export default useLoadQuestionData
