import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import { expenseTrackerContext } from "../context&reducer/expenseTrackerContext";

const Blanace = props => {

            const {transactions} = useContext(expenseTrackerContext)
            const amounts = transactions.map(transaction => transaction.amount)  
            let    sum = amounts.reduce( (accumulator, current) => accumulator+current);            // console.log(amounts)
            // amounts.forEach(transaction => {total =total+ transaction});
            // console.log(amounts)
    return (
        <div>
            Your Balance -<span>{sum}</span>
        </div>
    )
}

Blanace.propTypes = {

}

export default Blanace
