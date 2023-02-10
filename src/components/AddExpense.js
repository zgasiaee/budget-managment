import React, { useContext, useState } from 'react'

//style
import styles from '../styles/AddExpense.module.css'

//context
import { BudgetContext } from '../context/BudgetContextProvider'

const AddExpense = () => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const { dispatch } = useContext(BudgetContext)

  const setExpense = (event) => {
    event.preventDefault()
    const expense = {
      id: Math.floor(Math.random() * 100),
      cost: parseInt(cost),
      name: name,
    }
    dispatch({ type: 'ADD', payload: expense })
    setCost('')
    setName('')
  }

  return (
    <div>
      <h2 className={styles.titel}>Add Expense</h2>
      <form onSubmit={setExpense} className={styles.container}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input
            autoComplete="off"
            required="required"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Cost</label>
          <input
            autoComplete="off"
            required="required"
            name="cost"
            type="text"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <button className={styles.save}>Save</button>
      </form>
    </div>
  )
}

export default AddExpense
