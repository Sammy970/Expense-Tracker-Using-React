import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
