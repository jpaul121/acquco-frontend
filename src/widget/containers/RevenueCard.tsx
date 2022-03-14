import { getSalesTotal, useAppSelector } from '../../store'

import { RevenueCard as RevenueCardComponent } from '../components/RevenueCard'

export const RevenueCard = () => {
  const salesTotal = useAppSelector(getSalesTotal)
  return <RevenueCardComponent salesTotal={salesTotal} />
}