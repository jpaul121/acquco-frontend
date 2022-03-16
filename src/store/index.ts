import { useDispatch, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'
import { profitLossReducer } from '../widget/widgetSlice'

export type RootState = ReturnType<typeof reducer>

export const createStore = () =>
  configureStore({
    reducer: profitLossReducer,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(selector: (state: RootState) => T): T => useSelector<RootState, T>(selector)

export const stateIdentity = state => state
export const profitLossState = state => state.nodes

export const getBusinessData = createSelector(profitLossState, state => {
  const businessData = new Map()
  for (const item of state) {
    if (item['name'] !== 'Sales' && item['name'] !== 'Refunds' && item['name'] !== 'Expenses')
      businessData.set(item['name'], { ...item })
  }
  return businessData
})

export const getRevenueData = createSelector(getBusinessData, items => {
  const revenueData = new Map()
  for (const item of items.entries()) {
    if (item[1].kind === 1) revenueData.set(item[0], item[1])
  }
  return revenueData
})

export const getExpenseData = createSelector(getBusinessData, items => {
  const revenueData = new Map()
  for (const item of items.entries()) {
    if (item[1].kind === 0) revenueData.set(item[0], item[1])
  }
  return revenueData
})

// @ts-ignore
export const getSalesData = createSelector(getRevenueData, items => {
  const salesData = new Map()
  for (const item of items.entries()) {
    if (item[0] !== 'Refunded expenses') salesData.set(item[0], item[1])
  }
  return salesData
})

// @ts-ignore
export const getSalesTotal = createSelector(getSalesData, items => {
  let sum = 0
  // console.log('start', items)
  for (const item of items.entries()) {
    // console.log('ITEM', item)
    if (item[0] !== 'Sales') sum = sum + item[1].value
  }
  // console.log('SUM', sum)
  return sum
})

// @ts-ignore
export const getExpenseTotal = createSelector(getExpenseData, items => {
  let sum = 0
  for (const item of items.entries()) {
    if (item[0] !== 'Sales') sum = sum + item[1].value
  }
  return -sum
})

// @ts-ignore
export const getRefundTotal = createSelector(getBusinessData, state => 
    state.get('Refunded expenses').value - state.get('Refunded sales').value
)

// @ts-ignore
export const getTotalProceeds = createSelector(
  [ getSalesTotal, getRefundTotal, getExpenseTotal ],
  (totalSales, totalRefunds, totalExpenses) => totalSales + totalRefunds + totalExpenses
)

export const getDiagramData = createSelector(stateIdentity, state => {
  const newState = { ...state }
  const diagramNodes = state.nodes.map(item => {
    return { "name": item.name }
  })
  newState.nodes = diagramNodes
  return newState
})

export const getGoogleSankeyData = createSelector(getDiagramData, state => {
  console.log('hello', state)
  const formattedData = state.links.map(item => {
    // The graph would look much more aesthetically pleasing if
    // the difference between the largest items and 
    // the rest weren't so considerable. 
    const scaledDownItems = [ 'Product charges', 'Amazon fees', 'Cost of advertising' ]
    const weight = scaledDownItems.includes(item.target) ? item.value ** .8 : item.value
    
    let source = item.source
    if (item.target === 'Refunded expenses') source = 'Sales'
    if (item.target === 'Refunded sales') source = 'Expenses'
    
    return [ source, item.target, weight ]
  })
  formattedData.unshift([ 'From', 'To', 'Weight' ])
  console.log('FINALLY', formattedData)
  return formattedData
})