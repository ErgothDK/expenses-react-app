import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function titleChange(e) {
    setUserInput((previousState) => {
      return { ...previousState, title: e.target.value };
    });
  }

  function amountChange(e) {
    setUserInput((previousState) => {
      return { ...previousState, amount: e.target.value };
    });
  }

  function dateChange(e) {
    setUserInput((previousState) => {
      return { ...previousState, date: e.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    const userData = {
      title: userInput.title,
      amount: Number(userInput.amount),
      date: new Date(userInput.date),
      id: Math.random().toString(),
    };

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    props.onNewExpenseAdded(userData);
    props.onCancel(false);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.title}
              onChange={titleChange}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={userInput.amount}
              onChange={amountChange}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={userInput.date}
              onChange={dateChange}
            ></input>
          </div>
          <button type="button" onClick={() => props.onCancel(false)}>
            Cancel
          </button>
          <button type="submit" className="new-expense__actions">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
