// import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from './Card'
import {useState} from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList';
import ExpenesChart from './ExpensesChart';
const Expenses = (props) => {
    console.log(props.expenses)
    
    const [filteredYear,setFilteredYear] = useState('2020')
    console.log(props.className)
    const FilteredYear =(year)=>{
        setFilteredYear(year)
    }

    const filteredexpenses = props.expenses.filter(expense=> expense.date.getFullYear().toString()===filteredYear);
    // console.log("filteredexpense",filteredexpenses)
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilter={FilteredYear}/>
            
            {/* {filteredexpenses.map((expense)=>{
                // console.log(expense.date.getFullYear())
                return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            })} */}
            <ExpenesChart expenses={filteredexpenses}/>
            <ExpenseList filteredexpenses={filteredexpenses}/>
            
            
            {/*Static set up for mocks
             <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} /> */}
        </Card>
    )
}
export default Expenses;