import React from 'react'; // Import the React module
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, data: new Date(2023, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, data: new Date(2023, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, data: new Date(2023, 2, 28) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
