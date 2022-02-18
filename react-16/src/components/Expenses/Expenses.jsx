import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  	
  // console.log("date->",props.items[0].date);
  const filteredExpenses = props.items.filter(expense=>expense.date.getFullYear().toString() === filteredYear)
  // console.log(filteredExpenses);



  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* <h6>{JSON.stringify(props.items)}</h6> */}
        <ExpensesList items={filteredExpenses}/>
        <ExpensesChart expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;