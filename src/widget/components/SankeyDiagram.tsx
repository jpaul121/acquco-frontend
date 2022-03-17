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
    height: '100%',
    width: '30%',
    // marginLeft: '-16% !important',
  },
}))

export const SankeyDiagram = ({ data }) => {  
  return (
    <div className={classes.sankeyFlexbox}>
      <svg viewBox='0 0 210 420' style={{ width: '100%', height: '100%' }}>
        <path d='M 204 83 C 60 90 90 180 0 210 C 90 150 60 0 204 7' fill='rgb(220, 235, 254)' />
        <path d='M 203 7 L 203 83 Z C 204 6 207 6 208 7 V 83 C 207 84 204 84 203 83' fill='rgb(115, 171, 251)' />
      </svg>
    </div>
  )
}
