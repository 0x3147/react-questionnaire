import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserInfoService } from '@/services/user'

import type { PayloadAction } from '@reduxjs/toolkit'

export const fetchUserDataAction = createAsyncThunk(
  'userData',
  async (arg, { dispatch }) => {
    const res = await getUserInfoService()
    const { username, nickname } = res
    dispatch(loginAction({ username, nickname }))
  }
)

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
