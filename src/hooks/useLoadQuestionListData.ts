import { useRequest } from 'ahooks'
import { getQuestionListService } from '@/services/question'
import { useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'

import type { ISearchOption } from '@/services/question'

/**
 * @desc 获取问卷列表数据自定义hook
 * @Author bk0x114
 * @Date 2023-06-06 23:10:33
 */
const useLoadQuestionListData = (option: Partial<ISearchOption> = {}) => {
  const { isStar = false, isDeleted = false } = option
  const [searchParams] = useSearchParams()

  const load = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    return await getQuestionListService({ keyword, isDeleted, isStar })
  }

  const { data, loading, error } = useRequest(load, {
    refreshDeps: [searchParams]
  })
  return { data, loading, error }
}

export default useLoadQuestionListData
