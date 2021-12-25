import { configureStore } from '@reduxjs/toolkit'
import Users from './Users'

export const store = configureStore({
  reducer: { Users },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
