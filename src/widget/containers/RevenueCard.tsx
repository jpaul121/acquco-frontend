import { getExpenseTotal, getRefundTotal, getSalesTotal, getTotalProceeds, useAppSelector } from '../../store'

import { RevenueCard as RevenueCardComponent } from '../components/RevenueCard'

export const RevenueCard = () => {
  const salesTotal = useAppSelector(getSalesTotal)
  const refundTotal = useAppSelector(getRefundTotal)
  const expenseTotal = useAppSelector(getExpenseTotal)
  const totalProceeds = useAppSelector(getTotalProceeds)
  return <RevenueCardComponent
    expenseTotal={expenseTotal}
    salesTotal={salesTotal} 
    refundTotal={refundTotal} 
    totalProceeds={totalProceeds}
  />
}