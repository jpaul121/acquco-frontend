import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { createSelector } from '@reduxjs/toolkit'
import { profitLossReducer } from '../widget/widgetSlice'

export const reducer = combineReducers({
  profitLoss: profitLossReducer,
})

export type RootState = ReturnType<typeof reducer>

export const createStore = () =>
  configureStore({
    reducer,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(selector: (state: RootState) => T): T => useSelector<RootState, T>(selector)

export const getPLDataArray = state => Object.entries(state.profitLoss)
export const getRevenueData = createSelector(getPLDataArray, items =>
  items.filter(item => item[1].kind === 1)
)
export const getSalesData = createSelector(getRevenueData, items => 
  items.filter(item => item[0] !== 'Refunded expenses')
)
// @ts-ignore
export const getSalesTotal = createSelector(getSalesData, items => {
  let sum = 0
  for (const item of items) sum = sum + item[1].value
  return sum
})
