import './ExpenseFilter.css'
const ExpenseFilter =(props)=>{
    const FilterHandler =(event)=>{
        props.onFilter(event.target.value)
    }
    return(
        <div className="filter">
            <div className="filter_control">
                <label>Select the expense year</label>
                <select value={props.selected} onChange={FilterHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;