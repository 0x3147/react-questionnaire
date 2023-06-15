import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import userReducer from '@/store/module/userReducer'

import type { TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

// 获取state类型
type GetStateFnType = typeof store.getState
// 获取state返回值类型
type IRootState = ReturnType<GetStateFnType>
// 获取dispatch类型
type DisPatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DisPatchType = useDispatch

export default store
