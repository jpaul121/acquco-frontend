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
  console.log('new state', newState)
  return newState
})

export const getRevenue = createSelector(getDiagramData, state => (
  state.links.filter(item => item.source === 'Sales' || item.target === 'Refunded expenses')
))

export const getExpenses = createSelector(getDiagramData, state => (
  state.links.filter(item => item.source === 'Expenses' || item.target === 'Refunded sales')
))

const WEIGHT_NERF = .8

export const getPlotlyData = createSelector(getDiagramData, state => {
  console.log('plotly', state)
  const labels = state.nodes
    .map(item => {
      const topLevelLabels = [ 'Sales', 'Refunds', 'Expenses' ]
      return !topLevelLabels.includes(item.name) ? item.name : null
    })
    .filter(item => item !== null)
  // We need to hide the labels for 'Sales' and 'Expenses'
  labels.unshift('', '')
  // console.log('LABELS', labels)
  
  const xValues = [ 0.1, 0.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7 ]
  const yValues = [ 0.5, 0.4, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05 ]

  const source = [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ]
  const target = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
  const values = [ 126151.07 ** WEIGHT_NERF, 2251.87, 700.11, 541.85, 3890.82, 1808.24, 1315.51, 10095.06 ** WEIGHT_NERF, 57534.55 ** WEIGHT_NERF, 10.43 ]

  return [{
    type: 'sankey',
    arrangement: 'snap', 
    node: {
      // label: labels,
      label: '',
      x: [ 0.1, 0.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7 ],
      y: [ 0.4, 0.5, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ],
      color: [
        'rgb(115, 171, 251)', 'rgb(233, 109, 117)', 'rgb(115, 171, 251)',
        'rgb(115, 171, 251)', 'rgb(115, 171, 251)', 'rgb(115, 171, 251)', 
        'rgb(233, 109, 117)', 'rgb(233, 109, 117)', 'rgb(233, 109, 117)', 
        'rgb(233, 109, 117)', 'rgb(233, 109, 117)', 'rgb(233, 109, 117)'
      ],
      line: {
        width: 0,
      },
      thickness: 6,
      hoverinfo: 'skip',
    },
    link: {
      source: [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ],
      target: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      value: [ 126151.07 ** WEIGHT_NERF, 2251.87, 700.11, 541.85, 3890.82, 1808.24, 1315.51, 10095.06 ** WEIGHT_NERF, 57534.55 ** WEIGHT_NERF, 10.43 ],
      color: [
        'rgb(220, 234, 254)', 'rgb(251, 237, 238)', 'rgb(220, 234, 254)', 
        'rgb(220, 234, 254)', 'rgb(220, 234, 254)', 'rgb(220, 234, 254)', 
        'rgb(251, 237, 238)', 'rgb(251, 237, 238)', 'rgb(251, 237, 238)', 
        'rgb(251, 237, 238)', 'rgb(251, 237, 238)', 'rgb(251, 237, 238)'
      ],
      hoverlabel: {
        bgcolor: 'rgb(255, 255, 255)',
        bordercolor: 'rgb(237, 239, 245)',
        hovertemplate: 'This is a tooltip example.',
        hoverinfo: 'none',
        font: {
          color: 'rgb(182, 191, 212)',
        },
      },
      hoverinfo: 'skip',
    }
  }]
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

    // const color = (source === 'Sales') ? '#73ABFB' : '#E96D75'
    const color = (source === 'Sales') ? 'rgb(115, 171, 251)' : 'rgb(233, 109, 117)'
    const style = `color: ${color}; fill-color: ${color}`
    // console.log(style)
    
    return [ source, item.target, weight, style ]
  })
  formattedData.unshift([ 'From', 'To', 'Weight', { role: 'style', type: 'string' } ])
  // console.log('FINALLY', formattedData)
  return formattedData
})