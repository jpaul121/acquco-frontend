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
        <path d='M 204 7 V 83 C 91 85 40 173 0 210 V 200 C 74 147 83 10 204 7' fill='rgb(220, 235, 254)' />
        <path d='M 203 7 L 203 83 Z C 204 6 207 6 208 7 V 83 C 207 84 204 84 203 83' fill='rgb(115, 171, 251)' />
        <path d='M 204 98 V 128 C 124 131 88 142 0 211 V 201 C 88 142 88 98 204 98' fill='rgb(220, 235, 254)' />
        <path d='M 203 98 L 203 128 Z C 204 97 207 97 208 98 V 128 C 207 129 204 129 203 128' fill='rgb(115, 171, 251)' />
        <path d='M 204 142 V 154 C 132 155 73 164 0 206 V 201 C 74 159 132 143 204 142' fill='rgb(220, 235, 254)' />
        <path d='M 203 142 L 203 154 Z C 204 141 207 141 208 142 V 154 C 207 155 204 155 203 154' fill='rgb(115, 171, 251)' />
        <path d='M 205 166 V 173 C 135 172 70 176 0 210 V 205 C 70 171 135 166 205 166' fill='rgb(220, 235, 254)' />
        <path d='M 203 166 L 203 172 Z C 204 165 207 165 208 166 V 172 C 207 173 204 173 203 172' fill='rgb(115, 171, 251)' />
      </svg>
    </div>
  )
}
