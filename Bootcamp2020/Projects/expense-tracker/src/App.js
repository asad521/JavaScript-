import React,{Fragment} from 'react'
import './App.css';
import Header from './Component/Header';
import Balance from './Component/Balance';
import History from './Component/History/History';
import TDisplay from './Component/TDisplay';
import TransactionForm from './Component/TransactionForm/TransactionForm';
import {expenseTrackerProvider} from './context&reducer/expenseTrackerContext'
function App() {
  return (
    <Fragment>
    <Header></Header>
    <TDisplay></TDisplay>
    <Balance></Balance>
    <History></History>
    <TransactionForm></TransactionForm>
    </Fragment>
  );
}

export default App;
