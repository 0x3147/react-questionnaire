import { useRequest } from 'ahooks'
import { getQuestionListService } from '@/services/question'
import { useSearchParams } from 'react-router-dom'
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE
} from '@/constant'

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
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
      LIST_PAGE_SIZE
    return await getQuestionListService({
      keyword,
      isDeleted,
      isStar,
      page,
      pageSize
    })
  }

  const { data, loading, error, refresh } = useRequest(load, {
    refreshDeps: [searchParams]
  })
  return { data, loading, error, refresh }
}

export default useLoadQuestionListData
