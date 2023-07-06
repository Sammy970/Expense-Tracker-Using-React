import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, setNewExpense }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputChangeHandler = (identifer, value) => {
    if (identifer === "title") {
      setEnteredTitle(value);
    } else if (identifer === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    setNewExpense(false);
  };

  const cancelNewExpenseHandler = () => {
    setNewExpense(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={(e) => {
                inputChangeHandler("title", e.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amt">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={(e) => {
                inputChangeHandler("amount", e.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={(e) => {
                inputChangeHandler("date", e.target.value);
              }}
              min="2019-01-01"
              max="2024-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelNewExpenseHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
