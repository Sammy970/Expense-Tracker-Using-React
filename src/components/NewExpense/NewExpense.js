import React, { useState } from "react";
import "./NewExpense.css";

// Importing Components
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [newExpense, setNewExpense] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const newExpenseHandler = () => {
    setNewExpense(!newExpense);
  };

  const newExpenseContent = (
    <div className="new-expense__control">
      <button onClick={newExpenseHandler}>New Expense</button>
    </div>
  );

  return (
    <div className="new-expense">
      {!newExpense && newExpenseContent}
      {newExpense && <ExpenseForm setNewExpense={setNewExpense} onSaveExpenseData={SaveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
