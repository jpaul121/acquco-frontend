import Plot from 'react-plotly.js'
import React from 'react'
import { makeStyles } from '../../utils'

const classes = makeStyles()((theme) => ({
  sankeyFlexbox: {
    zIndex: 5,
    overflow: 'visible', 
    justifySelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    width: '30%',
    minWidth: '0',
    // marginLeft: '-16% !important',
  },
}))

export const SankeyDiagram = () => {  
  return (
    <div className={classes.sankeyFlexbox}>
      <svg viewBox='0 0 210 420' style={{ width: '100%', height: '100%' }}>
        {/* Revenue */}
        <path d='M 204 7 V 83 C 91 85 40 173 0 210 V 200 C 74 147 83 10 204 7' fill='rgb(220, 235, 254)' />
        <path d='M 203 7 L 203 83 Z C 204 6 207 6 208 7 V 83 C 207 84 204 84 203 83' fill='rgb(115, 171, 251)' />
        <path d='M 204 98 V 128 C 124 131 88 142 0 211 V 201 C 88 142 88 98 204 98' fill='rgb(220, 235, 254)' />
        <path d='M 203 98 L 203 128 Z C 204 97 207 97 208 98 V 128 C 207 129 204 129 203 128' fill='rgb(115, 171, 251)' />
        <path d='M 204 142 V 154 C 132 155 73 164 0 206 V 201 C 74 159 132 143 204 142' fill='rgb(220, 235, 254)' />
        <path d='M 203 142 L 203 154 Z C 204 141 207 141 208 142 V 154 C 207 155 204 155 203 154' fill='rgb(115, 171, 251)' />
        <path d='M 205 166 V 173 C 135 172 70 176 0 210 V 205 C 70 171 135 166 205 166' fill='rgb(220, 235, 254)' />
        <path d='M 203 166 L 203 172 Z C 204 165 207 165 208 166 V 172 C 207 173 204 173 203 172' fill='rgb(115, 171, 251)' />
        {/* Expenses */}
        <path d='M 205 266 V 266 C 134 265 41 248 0 216 V 210 C 41 240 134 250 205 247' fill='rgb(251, 237, 238)' />
        <path d='M 203 247 L 203 266 Z C 204 246 207 246 208 247 V 266 C 207 267 204 267 203 266' fill='rgb(233, 109, 117)' />
        <path d='M 205 274 V 285 C 136 284 41 252 0 222 V 216 C 41 244 136 279 205 274' fill='rgb(251, 237, 238)' />
        <path d='M 203 275 L 203 285 Z C 204 274 207 274 208 275 V 285 C 207 286 204 286 203 285' fill='rgb(233, 109, 117)' />
        <path d='M 205 301 V 305 C 95 305 41 239 0 224 V 220 C 42 235 96 295 205 301' fill='rgb(251, 237, 238)' />
        <path d='M 203 300 L 203 305 Z C 204 299 207 299 208 300 V 305 C 207 306 204 306 203 305' fill='rgb(233, 109, 117)' />
        <path d='M 205 317 V 328 C 96 323 39 264 0 228 V 224 C 39 253 97 316 205 317' fill='rgb(251, 237, 238)' />
        <path d='M 203 316 L 203 328 Z C 204 315 207 315 208 316 V 328 C 207 329 204 329 203 328' fill='rgb(233, 109, 117)' />
        <path d='M 205 334 V 355 C 87 353 36 285 0 235 V 228 C 35 267 87 329 205 334' fill='rgb(251, 237, 238)' />
        <path d='M 203 333 L 203 356 Z C 204 332 207 332 208 333 V 356 C 207 357 204 357 203 356' fill='rgb(233, 109, 117)' />
        <path d='M 205 371 V 375 C 72 368 31 267 0 238 V 235 C 31 260 71 361 205 371' fill='rgb(251, 237, 238)' />
        <path d='M 203 370 L 203 375 Z C 204 369 207 369 208 370 V 375 C 207 376 204 376 203 375' fill='rgb(233, 109, 117)' />
      </svg>
    </div>
  )
}
