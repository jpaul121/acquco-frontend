import React, { useCallback, useEffect, useState } from 'react'
import { getExpenses, getRevenue } from '../../store'

import { ProfitLossWidget as PLWidgetComponent } from '../components/ProfitLossWidget'
import { fetchProfitLossData } from '../widgetSlice'
import { useDispatch } from 'react-redux'

export const ProfitLossWidget = () => {
  
  const [ revenueData, setRevenueData ] = useState()
  const [ expenseData, setExpenseData ] = useState()

  const dispatch = useDispatch()

  const getData = useCallback(
    async (selector, reactDispatch) => {
      await dispatch(fetchProfitLossData(selector))
        .then(responseData => {
          reactDispatch(responseData)
      })
    }, 
    [ dispatch ]
  )

  useEffect(() => {
    getData(getExpenses, setExpenseData)
    getData(getRevenue, setRevenueData)
  }, [ getData ])
  
  
  return <PLWidgetComponent expenseData={expenseData} revenueData={revenueData} />
}