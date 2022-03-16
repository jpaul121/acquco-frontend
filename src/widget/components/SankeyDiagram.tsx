import Plot from 'react-plotly.js'
import React from 'react'

export const SankeyDiagram = ({ data }) => {  
  return (
    <div style={{ zIndex: 5, overflow: 'visible' }}>
      <Plot
        data={data}
      />
    </div>
  )
}
