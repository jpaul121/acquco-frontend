import React, { useEffect, useState } from 'react'
import { getBusinessData, getExpenseTotal, getRefundTotal, getSalesTotal, getTotalProceeds } from '../../store'

import { RevenueCard as RevenueCardComponent } from '../components/RevenueCard'
import { fetchProfitLossData } from '../widgetSlice'
import { useDispatch } from 'react-redux'

export const RevenueCard = () => {
  
  const dispatch = useDispatch()

  const [ data, setData ] = useState()
  const [ salesTotal, setSalesTotal ] = useState()
  const [ expenseTotal, setExpenseTotal ] = useState()
  const [ refundTotal, setRefundTotal ] = useState()
  const [ totalProceeds, setTotalProceeds ] = useState()
  
  useEffect(() => {
    const getData = async (selector, reactDispatch) => {
      await dispatch(fetchProfitLossData(selector))
        .then(responseData => {
          reactDispatch(responseData)
      })
    }
    // console.log('DATA', data)
    getData(getBusinessData, setData)
    getData(getSalesTotal, setSalesTotal)
    getData(getExpenseTotal, setExpenseTotal)
    getData(getRefundTotal, setRefundTotal)
    getData(getTotalProceeds, setTotalProceeds)
  }, [ dispatch, salesTotal, expenseTotal, refundTotal, totalProceeds ])
  
  return <RevenueCardComponent
    expenseTotal={expenseTotal}
    salesTotal={salesTotal}
    refundTotal={refundTotal} 
    totalProceeds={totalProceeds}
  />
}