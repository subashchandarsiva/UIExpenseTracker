import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props)=>{
    const [addingExpense,setAddingExpense] =useState(false)

    const AddExpenseHandler =()=>{
        setAddingExpense(true)
    }

    const CancelHandler =()=>{
        setAddingExpense(false)
    }

const SaveExpenseHandler =(expensedata)=>{
   const  expensedata_modified ={
        ...expensedata,
        id:Math.random().toString(),
        addingExpense:false
    }
    props.onAddExpenseData(expensedata_modified)
}
    return(
        <div className="new_expense">
            {addingExpense ? <ExpenseForm onSaveExpenseData={SaveExpenseHandler} onCancel={CancelHandler}/>:<button onClick={AddExpenseHandler}>Add Expense</button> }
        </div>
    )
}

export default NewExpense;