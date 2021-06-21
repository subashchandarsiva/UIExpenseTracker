import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card'
// import { useState } from 'react';

const ExpenseItem = (props) => {

    // const [title,setTitle] = useState(props.title);
// const ChangeTitleHandler =()=>{
//     setTitle("updated")
//     console.log("Its been clicker")
// }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>

                <div className="expense-item__price">
                    {props.amount}
                </div>
            </div>
            {/* <button onClick={ChangeTitleHandler}>Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem;