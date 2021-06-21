import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {

    if (props.filteredexpenses.length === 0) {
        return <h2 className="fallback_expense">No Expenses Found</h2>
    }

    // if(props.filteredexpenses.length>0){
    //     const expenseContent = props.filteredexpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
    // }

    return (

        //  {filteredexpenses.map((expense)=>{
        //         // console.log(expense.date.getFullYear())
        //         return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        //     })} 
        <ul className="expenseContent">
            {
                props.filteredexpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
            }
        </ul>

    )
}

export default ExpenseList