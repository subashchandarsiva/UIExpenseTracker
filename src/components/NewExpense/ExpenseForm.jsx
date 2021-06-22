import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm =(props)=>{
    //Way to Method 1
    const [newTitle,setNewTitle] = useState('')
    const [newAmount,setNewAmount] = useState('')
    const [newDate,setNewDate] = useState('')

    //Way to Method 2 and 3
    // const [userInput,setUserInput]=useState({
    //     newTitle:'',
    //     newAmount:'',
    //     newDate:''
    // })
    const TitleHandler =(event)=>{
        //Method 1
        setNewTitle(event.target.value)
        // console.log(event.target.value)
        
        //Method 2
        // setUserInput({
        //     ...userInput,
        //     newTitle:event.target.value
        // })

        //Method 3 - the same applies to below two handlers- userInput is the prevState
        // setUserInput((userInput)=>{
        //     return{
        //         ...userInput,
        //         newTitle:event.target.value
        //     }
        // })
    } 
    const AmountHandler =(event)=>{
        setNewAmount(event.target.value)
        // console.log(event.target.value)

        // Method 2
        // setUserInput({
        //     ...userInput,
        //     newAmount:event.target.value
        // })

       
       
    }
    const PurchaseHandler =(event)=>{
        setNewDate(event.target.value)
        // console.log(event.target.value)
        
        //Method 2
        // setUserInput({
        //     ...userInput,
        //     newDate:event.target.value
        // })
    }
    const SubmitHandler =(e)=>{
        e.preventDefault()
        const ExpenseData ={
            title:newTitle,
            amount:newAmount,
            // date: new Date(newDate)
            date : new Date(newDate)
        }
        props.onSaveExpenseData(ExpenseData)
        setNewTitle('')
        setNewDate('')
        setNewAmount('')
    }
    return(<form onSubmit={SubmitHandler}>
        <div className="input_controls">
            <div className="input_control">
                <label>Title</label>
                <input type="text" value={newTitle} onChange={TitleHandler} />
            </div>
            <div className="input_control">
            <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={newAmount}  onChange={AmountHandler}/>
            </div>
            <div className="input_control">
            <label>Date of Purchase</label>
                <input type="date" min="2019-01-01" max="2021-07-01" value={newDate}  onChange={PurchaseHandler}/>
            </div>
        </div>
            <div className="expense_actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        
    </form>)
}

export default ExpenseForm;