//component
import Budget from './components/Budget'
import Expenses from './components/Expenses'
import AddExpense from './components/AddExpense'

//context
import BudgetContextProvider from './context/BudgetContextProvider'

//style
import styles from './styles/Budget.module.css'

function App() {
  return (
    <BudgetContextProvider>
      <div className={styles.container}>
        <Budget />
        <Expenses />
        <AddExpense />
      </div>
    </BudgetContextProvider>
  )
}

export default App
