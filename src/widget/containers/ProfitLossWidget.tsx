// @ts-nocheck

import React, { useEffect, useState } from 'react'

import { ProfitLossWidget as PLWidgetComponent } from '../components/ProfitLossWidget'
import { fetchProfitLossData } from '../widgetSlice'
import { getDiagramData } from '../../store'
import { useDispatch } from 'react-redux'

export const ProfitLossWidget = () => {
  
  const [ lineItemData, setLineItemData ] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async (selector, reactDispatch) => {
      await dispatch(fetchProfitLossData(selector))
        .then(responseData => {
          reactDispatch(responseData)
      })
    }
    getData(getDiagramData, setLineItemData)
    console.log(lineItemData)
  }, [ dispatch, lineItemData ])
  
  
  return <PLWidgetComponent lineItemData={lineItemData} />
}