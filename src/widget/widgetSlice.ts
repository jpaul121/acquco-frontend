import { createSlice } from '@reduxjs/toolkit'
import data from '../../public/formattedPLData.json'

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
    dispatch(loadDataAction(data))
    return selector(getState())
  }
}

export const profitLossReducer = profitLossSlice.reducer
