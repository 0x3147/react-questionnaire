import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'
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
  selectedId: string
}

const initialState: IComponentState = {
  componentList: [],
  selectedId: ''
}

export const componentSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    // 重置所有组件
    resetComponents: (state, { payload }: PayloadAction<IComponentState>) => {
      return payload
    },
    // 修改selectedId
    changeSelectedId: produce(
      (draft: IComponentState, { payload }: PayloadAction<string>) => {
        draft.selectedId = payload
      }
    )
  }
})

export const { resetComponents, changeSelectedId } = componentSlice.actions
export default componentSlice.reducer
