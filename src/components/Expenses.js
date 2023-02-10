import React, { useContext, useState } from 'react'

//style
import styles from '../styles/Expenses.module.css'

//component
import Expense from './Expense'

//context
import { BudgetContext } from '../context/BudgetContextProvider'

const Expenses = () => {

  const [search, setSearch] = useState('')
  const {expenses} = useContext(BudgetContext)

  const searchExpense = expenses.filter(item => item.name.includes(search))

  return (
    <div className={styles.expenseContainer}>
      <h2 className={styles.titel}>Expenses</h2>
      <input
        className={styles.search}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Type to search ..."
      />
       {
          searchExpense.map(expense => <Expense cost={expense.cost} name={expense.name} key={expense.id} id={expense.id} />)
       }
    </div>
  )
}

export default Expenses
