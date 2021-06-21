import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props)=>{

const SaveExpenseHandler =(expensedata)=>{
    props.onAddExpenseData(expensedata)
}
    return(
        <div className="new_expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseHandler} />
        </div>
    )
}

export default NewExpense;