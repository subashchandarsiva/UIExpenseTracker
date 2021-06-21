import './ExpenseDate.css'

const ExpenseDate =(props)=>{
    // console.log(props.items)
    const month = props.date.toLocaleString('en-UK',{month:'long'})
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-UK',{day:'2-digit'})
return(<div className="complete_date">
    <div className="month">
        {month}
    </div>
    <div className="year">
        {year}
    </div>
    <div className="day">
        {day}
    </div>
</div>)

}

export default ExpenseDate;