import React, { createContext, useReducer } from 'react';

const initialState = {budget: '3000' , expenses : [
    {id : 1 , cost : 50 , name : 'shopping'}
]}

const budgetReducer = (state , action) => {
    switch(action.type) {
        case 'ADD' : 
          return{
              ...state ,
              expenses : [...state.expenses , action.payload]
          }
        case 'REMOVE' : 
          return {
              ...state , 
              expenses : state.expenses.filter(item => item.id !== action.payload )
          }
        case 'EDIT' : 
        return {
            ...state , 
            budget : action.payload
        }
        default : 
          return state
    }
}

export const BudgetContext = createContext()

const BudgetContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(budgetReducer , initialState)

    return (
        <BudgetContext.Provider value={{budget : state.budget , expenses : state.expenses , dispatch }}>
            {children}
        </BudgetContext.Provider>
    );
};

export default BudgetContextProvider;