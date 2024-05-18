import BudgetPlanner from '@/components/BudgetPlanner'
import ExpenseTracker from '@/components/ExpenseTracker'
import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        
      <BudgetPlanner/>
      <ExpenseTracker/>

      </section>
    </DefaultLayout>
  )
}
