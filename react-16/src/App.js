import React,{useState} from 'react';

import DUMMY_EXPENSES from './Data/data';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  // console.log(expenses)
  const addExpenseHandler = expense => {
    console.log('In App.js');
    setExpenses((prevExpenses)=>[expense,...prevExpenses])
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );