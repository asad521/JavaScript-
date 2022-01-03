import React, { createContext, useReducer } from "react";
import expenseTrackerReducer from "./expenseTrackerReducer";
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 50 },
    { id: 3, text: "Stock", amount: 300 },
    { id: 4, text: "Drink", amount: -5 },
  ],
};
//create Context//init context
export const expenseTrackerContext = createContext(initialState);
//provide Context//init provider
export const GlobalProvider = ({ children }) => {
  //init reducer
  const [state, dispatch] = useReducer(expenseTrackerReducer, initialState);

  //action

  function deleteTransaction (id)  {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <expenseTrackerContext.Provider value={{
        transaction: state.transactions,
        dt:deleteTransaction(), 
      }}>
      {children}
    </expenseTrackerContext.Provider>
  );
}; 
