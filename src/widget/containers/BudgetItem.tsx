import { BudgetItem as BudgetItemComponent } from '../components/BudgetItem'

export interface Props {
  name: string;
  total: number;
}

export const BudgetItem = ({ name, total }: Props) => {
  console.log('plz', total)
  return <BudgetItemComponent name={name} total={total} />
}