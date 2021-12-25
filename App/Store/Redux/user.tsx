import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { default as getUserService } from '@Api/User'

export interface TYPE_USER {
  id: number
  name: string
  email: string
}

export const fetchUser = createAsyncThunk('root/fetchUser', async () => {
  return (await getUserService()) as TYPE_USER
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {} as TYPE_USER,
    loading: true,
    success: null as boolean | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.success = true
    })
    builder.addCase(fetchUser.rejected, state => {
      state.loading = false
      state.success = false
    })
  },
})

export default userSlice.reducer
