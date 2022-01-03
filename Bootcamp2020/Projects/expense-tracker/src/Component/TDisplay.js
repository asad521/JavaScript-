import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import { expenseTrackerContext } from "../context&reducer/expenseTrackerContext";

const TDisplay = props => {
    const {transactions} = useContext(expenseTrackerContext);

    const amounts = transactions.map(transaction => transaction.amount);
    //it will filter all items which are grater than 0 ,hence income,then we add them using reduce
    const income =amounts.filter(item => item > 0).reduce((acc,cur) => (acc +=cur),0)
    //it will filter all items which are grater than 0 ,hence income,then we add them using reduce
    const expense =amounts.filter(item => item < 0).reduce((acc,cur) => (acc +=cur),0)*-1

    return (
        <div>
            <h2>Expense:{expense}</h2>
            <h2>Income:{income}</h2>
        </div>
    )
}

TDisplay.propTypes = {

}

export default TDisplay
