import Plot from 'react-plotly.js'
import React from 'react'
import { makeStyles } from '../../utils'

const classes = makeStyles()((theme) => ({
  sankeyFlexbox: {
    zIndex: 5,
    overflow: 'visible', 
    justifySelf: 'flex-start',
    display: 'flex',
    justifyContent: 'flex-start',
    // marginLeft: '-16% !important',
  }
}))

export const SankeyDiagram = ({ data }) => {  
  return (
    <div className={classes.sankeyFlexbox}>
      <Plot
        data={data}
        layout={{
          height: 600,
          width: 700,
        }}
      />
    </div>
  )
}
