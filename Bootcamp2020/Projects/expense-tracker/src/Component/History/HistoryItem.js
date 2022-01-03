import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import { expenseTrackerContext } from '../../context&reducer/expenseTrackerContext';

const HistoryItem = ({transaction}) => {
    const  dt  = useContext(expenseTrackerContext);
    // console.log(transaction)
    console.log('in hisotry item')
    console.log('THIS IS CONTEXT'+ Object.values(dt))
    
    return (    
        <div>
            <ul>
                <li><button onClick={() => console.log(8)}>Delete</button><span>{transaction.text}</span><span>{transaction.amount}</span></li>
            </ul>
        </div>
    )
}

HistoryItem.propTypes = {

}

export default HistoryItem
