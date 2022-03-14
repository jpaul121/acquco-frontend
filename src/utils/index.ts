import { createMakeAndWithStyles } from 'tss-react'
import { useTheme } from '@mui/material'

export const { makeStyles, withStyles } = createMakeAndWithStyles({ useTheme })
export const noOp = () => {}
export const rawNumbertoDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})