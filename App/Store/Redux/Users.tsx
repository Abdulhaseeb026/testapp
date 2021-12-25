import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from '@Redux'
import { fetchUsers as fetch, USER_DATA } from '@Api/Users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch()
  return response
})

export const usersAdapter = createEntityAdapter<USER_DATA>()

const usersSlice = createSlice({
  name: 'User',
  initialState: usersAdapter.getInitialState({
    loading: false,
    success: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
      state.success = false
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      usersAdapter.setAll(state, action.payload)
      state.loading = false
      state.success = true
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
      state.success = false
    })
  },
})

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state: RootState) => state.Users)

export default usersSlice.reducer
