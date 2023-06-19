import { useParams } from 'react-router-dom'
import { getQuestionService } from '@/services/question'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useAppDispatch } from '@/store'
import { resetComponents } from '@/store/module/componentReducers'

/**
 * @desc 获取问卷数据自定义hook
 * @Author bk0x114
 * @Date 2023-05-06 19:16:09
 */
const useLoadQuestionData = () => {
  const dispatch = useAppDispatch()

  const { id = '' } = useParams<{ id: string }>()

  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('问卷id不能为空')
      return await getQuestionService(id)
    },
    {
      manual: true
    }
  )

  // 根据data更新store
  useEffect(() => {
    if (!data) return
    const { title = '', componentList = [] } = data
    // 将componentList存入store
    dispatch(resetComponents({ componentList }))
  }, [data])

  // 根据id获取问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useLoadQuestionData
