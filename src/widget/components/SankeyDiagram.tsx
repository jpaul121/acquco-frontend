import Chart from 'react-google-charts'
import React from 'react'

export const SankeyDiagram = ({ data }) => {  
  return (
    <div>
      <Chart
        width={600}
        height={'350px'}
        chartType={'Sankey'}
        data={data}
      />
    </div>
  )
}
