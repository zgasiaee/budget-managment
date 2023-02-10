import React, { useContext } from 'react';

//style
import styles from '../styles/Expenses.module.css'

//context
import { BudgetContext } from '../context/BudgetContextProvider';

const Expense = ({name , cost , id}) => {

    const {dispatch} = useContext(BudgetContext)

    const deleteExpense = () =>{
        dispatch({
            type : 'REMOVE' ,
            payload : id
        })
    }

    return (
        <div className={styles.box}>
            <p className={styles.text}>{name}</p>
            <div className={styles.iconContainer}>
              <span className={styles.money}>${cost}</span>
              <i onClick={deleteExpense} className='fa fa-times-circle'></i>
            </div>
        </div>
    );
};

export default Expense;