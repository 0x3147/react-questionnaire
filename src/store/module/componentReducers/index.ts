import { createSlice } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/QuestionComponents'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IComponentInfo {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

export interface IComponentState {
  componentList: IComponentInfo[]
}

const initialState: IComponentState = {
  componentList: []
}

export const componentSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    // 重置所有组件
    resetComponents: (state, { payload }: PayloadAction<IComponentState>) => {
      return payload
    }
  }
})

export const { resetComponents } = componentSlice.actions
export default componentSlice.reducer
