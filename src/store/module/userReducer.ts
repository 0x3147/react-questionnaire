import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  username: string
  nickname: string
}

const initialState: IUserState = { username: '', nickname: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginAction: (state, { payload }: PayloadAction<IUserState>) => {
      return payload
    },
    logoutAction: () => initialState
  }
})

export const { loginAction, logoutAction } = userSlice.actions
export default userSlice.reducer
