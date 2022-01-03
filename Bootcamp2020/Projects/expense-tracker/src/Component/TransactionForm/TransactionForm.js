import React, {useState} from 'react'
import PropTypes from 'prop-types'

const TransactionForm = props => {

    const [text,setText] = useState('');
    const [amount,setAmount]= useState(0);
    
    const submit = e => {
        console.log('clicked')
    }
    return (
        <div>
             <h1>Add new Transaction</h1>
             <label htmlFor='transaction'>Expense Discription</label>
             <input type="text" name='text' value={text}  onChange={e=>setText(e.target.value)}placeholder='Enter the Text'></input>
             <input type="text" name='amount' value={amount} onChange={e=>setAmount(e.target.value)} placeholder='Enter the Text'></input>
            <button name='button' onClick={submit}>Enter</button>
        </div>
    )
}

TransactionForm.propTypes = {

}

export default TransactionForm
