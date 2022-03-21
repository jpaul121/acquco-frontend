import React, { useEffect, useState, useCallback } from 'react'
import { getExpenseTotal, getRefundTotal, getSalesTotal, getTotalProceeds } from '../../store'

import { RevenueCard as RevenueCardComponent } from '../components/RevenueCard'
import { fetchProfitLossData } from '../widgetSlice'
import { useDispatch } from 'react-redux'

export const RevenueCard = () => {
  
  const dispatch = useDispatch()

  const [ salesTotal, setSalesTotal ] = useState()
  const [ expenseTotal, setExpenseTotal ] = useState()
  const [ refundTotal, setRefundTotal ] = useState()
  const [ totalProceeds, setTotalProceeds ] = useState()

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
    getData(getSalesTotal, setSalesTotal)
    getData(getExpenseTotal, setExpenseTotal)
    getData(getRefundTotal, setRefundTotal)
    getData(getTotalProceeds, setTotalProceeds)
  }, [ dispatch, getData, salesTotal, expenseTotal, refundTotal, totalProceeds ])
  
  return <RevenueCardComponent
    expenseTotal={expenseTotal}
    salesTotal={salesTotal}
    refundTotal={refundTotal} 
    totalProceeds={totalProceeds}
  />
}