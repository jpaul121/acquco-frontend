import React, { useEffect, useState } from 'react'
import { getGoogleSankeyData, getPlotlyData } from '../../store'

import { SankeyDiagram as SankeyDiagramComponent } from "../components/SankeyDiagram"
import { fetchProfitLossData } from '../widgetSlice'
import { useDispatch } from 'react-redux'

export const SankeyDiagram = () => {
  
  const [ data, setData ] = useState()
  const [ pData, setPData ] = useState()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getData = async (selector, reactDispatch) => {
      await dispatch(fetchProfitLossData(selector))
        .then(responseData => {
          reactDispatch(responseData)
      })
    }
    getData(getGoogleSankeyData, setData)
    getData(getPlotlyData, setPData)
    console.log('pData', pData)
  }, [ dispatch, data, pData ])
  
  
  return (
    <SankeyDiagramComponent data={pData} />
  )
}