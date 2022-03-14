import { getExpenseTotal, getRefundTotal, getSalesTotal, useAppSelector } from '../../store'

import { RevenueCard as RevenueCardComponent } from '../components/RevenueCard'

export const RevenueCard = () => {
  const salesTotal = useAppSelector(getSalesTotal)
  const refundTotal = useAppSelector(getRefundTotal)
  const expenseTotal = useAppSelector(getExpenseTotal)
  return <RevenueCardComponent salesTotal={salesTotal} refundTotal={refundTotal} expenseTotal={expenseTotal} />
}