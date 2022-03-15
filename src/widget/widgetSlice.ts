import { createSlice } from '@reduxjs/toolkit'
import data from '../../public/formattedPLData.json'

export interface LineItemRecord {
  [ name: string ]: LineItem;
}

export interface LineItem {
  kind: LineItemType;
  value: number;
  granularity: LineItemGranularity;
}

export enum LineItemType {
  Expense = 0,
  Revenue = 1,
}

export enum LineItemGranularity {
  Summary = 1,
  LineItem = 2,
  Detail = 3,
}

export const initialState: LineItemRecord = {
  'Product charges': {
    kind: LineItemType.Revenue,
    value: 126151.07,
    granularity: LineItemGranularity.LineItem,
  },
  'Shipping': {
    kind: LineItemType.Revenue,
    value: 2251.87,
    granularity: LineItemGranularity.LineItem,
  },
  'Other revenues': {
    kind: LineItemType.Revenue,
    value: 700.11,
    granularity: LineItemGranularity.LineItem,
  },
  'Refunded expenses': {
    kind: LineItemType.Revenue,
    value: 541.85,
    granularity: LineItemGranularity.LineItem,
  },
  'Refunded sales': {
    kind: LineItemType.Expense,
    value: 3890.82,
    granularity: LineItemGranularity.LineItem,
  },
  'Promotional rebates': {
    kind: LineItemType.Expense,
    value: 1808.24,
    granularity: LineItemGranularity.LineItem,
  },
  'FBA fees': {
    kind: LineItemType.Expense,
    value: 1315.51,
    granularity: LineItemGranularity.LineItem,
  },
  'Cost of advertising': {
    kind: LineItemType.Expense,
    value: 10095.06,
    granularity: LineItemGranularity.LineItem,
  },
  'Amazon fees': {
    kind: LineItemType.Expense,
    value: 57534.55,
    granularity: LineItemGranularity.LineItem,
  },
  'Other expenses': {
    kind: LineItemType.Expense,
    value: 10.43,
    granularity: LineItemGranularity.LineItem,
  },
}

export const loadDataAction = data => {
  return {
    type: 'LOAD_DATA',
    payload: data,
  }
}

const profitLossSlice = createSlice({
  name: 'nodes',
  initialState: data,
  reducers: {
    profitLoss: (state, action) => {
      switch (action.type) {
        case 'LOAD_DATA':
          return action.payload
        default:
          return state
      }
    },
  },
})

export const fetchProfitLossData = selector => {
  return async (dispatch, getState) => {
    const data = await (await fetch('/formattedPLData.json')).json()
    console.log('the response data', data)
    dispatch(loadDataAction(data))
    return selector(getState())
  }
}

export const profitLossReducer = profitLossSlice.reducer
// export const { recalculateBalance } = profitLossSlice.actions
