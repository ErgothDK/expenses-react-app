import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  function NewExpenseAdded(expense) {
    props.onNewExpenseAdded(expense);
  }

  const [showForm, setShowForm] = useState(false);

  let newExpenseContent = (
    <button onClick={() => showFormHandler(true)}>Add New Expense</button>
  );

  if (showForm) {
    newExpenseContent = (
      <ExpenseForm
        onNewExpenseAdded={NewExpenseAdded}
        onCancel={showFormHandler}
      />
    );
  }

  function showFormHandler(showForm = false) {
    setShowForm(showForm);
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
