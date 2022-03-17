// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { getExpenses, getRevenue } from '../../store'

import { ProfitLossWidget as PLWidgetComponent } from '../components/ProfitLossWidget'
import { fetchProfitLossData } from '../widgetSlice'
import { useDispatch } from 'react-redux'

export const ProfitLossWidget = () => {
  
  const [ revenueData, setRevenueData ] = useState()
  const [ expenseData, setExpenseData ] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async (selector, reactDispatch) => {
      await dispatch(fetchProfitLossData(selector))
        .then(responseData => {
          reactDispatch(responseData)
      })
    }
    getData(getExpenses, setExpenseData)
    getData(getRevenue, setRevenueData)
  }, [ dispatch, expenseData, revenueData ])
  
  
  return <PLWidgetComponent expenseData={expenseData} revenueData={revenueData} />
}