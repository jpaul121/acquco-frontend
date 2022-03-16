import React, { useEffect, useState } from 'react'

import { SankeyDiagram as SankeyDiagramComponent } from "../components/SankeyDiagram"
import { fetchProfitLossData } from '../widgetSlice'
import { getGoogleSankeyData } from '../../store'
import { useDispatch } from 'react-redux'

export const SankeyDiagram = () => {
  
  const [ data, setData ] = useState()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getData = async (selector, reactDispatch) => {
      await dispatch(fetchProfitLossData(selector))
        .then(responseData => {
          reactDispatch(responseData)
      })
    }
    getData(getGoogleSankeyData, setData)
  }, [ dispatch, data ])
  
  
  return (
    <SankeyDiagramComponent data={data} />
  )
}