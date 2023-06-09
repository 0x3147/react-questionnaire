import { useAppSelector } from '@/store'

/**
 * @desc 获取组件信息自定义hook
 * @Author bk0x114
 * @Date 2023-06-19 14:49:29
 */
const useGetComponentsInfo = () => {
  const components = useAppSelector((state) => state.components)

  const { componentList = [], selectedId } = components

  const selectedComponent = componentList.find(
    (item) => item.fe_id === selectedId
  )

  return { componentList, selectedId, selectedComponent }
}

export default useGetComponentsInfo
