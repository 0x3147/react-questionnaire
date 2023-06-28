import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

import type { ComponentPropsType } from '@/components/QuestionComponents'
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
    ),
    // 添加组件
    addComponent: produce(
      (draft: IComponentState, { payload }: PayloadAction<IComponentInfo>) => {
        const newComponent = payload
        const { selectedId, componentList } = draft
        const index = componentList.findIndex((c) => c.fe_id === selectedId)
        // 如果未选中组件，则添加到最后
        if (index < 0) {
          draft.componentList.push(newComponent)
        } else {
          // 否则添加到选中组件的后面
          draft.componentList.splice(index + 1, 0, newComponent)
        }
        draft.selectedId = newComponent.fe_id
      }
    ),
    changeComponentProps: produce(
      (
        draft: IComponentState,
        {
          payload
        }: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
      ) => {
        const { fe_id, newProps } = payload
        // 找到当前要修改组件
        const currentComponent = draft.componentList.find(
          (c) => c.fe_id === fe_id
        )
        if (currentComponent) {
          currentComponent.props = {
            ...currentComponent.props,
            ...newProps
          }
        }
      }
    )
  }
})

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps
} = componentSlice.actions
export default componentSlice.reducer
