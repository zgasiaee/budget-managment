import React, { useContext, useState } from 'react'

//style
import styles from '../styles/Budget.module.css'

//context
import { BudgetContext } from '../context/BudgetContextProvider'

const Budget = () => {

  const [value, setValue] = useState('')
  const [edit , setEdit] = useState(false)
  const { budget , expenses , dispatch } = useContext(BudgetContext)

  const totalBudget = () => {
    return expenses.reduce((total , item) => total + item.cost , 0)
  }

  const editBudget = () => {
    setEdit(!edit)
    if(value){
        dispatch({type : 'EDIT' , payload : value})
    }
  }

  return (
    <div className={styles.budgetContainer}>
      <h1 className={styles.titel}>My Budget Planner</h1>
      <div className={styles.cardContainer}>
        <div
          className={styles.card}
          style={{ backgroundColor: '#e2e3e5', color: '#383d41' }}
        >
          <span style={{opacity: edit ? '0' : '1' , display: edit ? 'none' : 'block'}}>Budget : ${budget}</span>
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            style={{opacity: edit ? '1' : '0' , display: edit ? 'block' : 'none'}}
          />
          <button onClick={editBudget} className={styles.button}>Edit</button>
        </div>
        <div
          className={styles.card}
          style={{
            backgroundColor: totalBudget() > budget ? '#f8d7da' : '#d4edda',
            color: totalBudget() > budget ? '#721c24' : '#155724',
          }}
        >
          <span>Remaining : ${budget - totalBudget()}</span>
        </div>
        <div
          className={styles.card}
          style={{ backgroundColor: '#cce5ff', color: '#004085' }}
        >
          <span>Spent so far : ${totalBudget()}</span>
        </div>
      </div>
    </div>
  )
}

export default Budget
