import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './HomeSlice.jsx'
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})
