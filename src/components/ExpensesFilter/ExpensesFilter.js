import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const currentYear = new Date().getFullYear();
  const lastYears = [];

  for (let i = 0; i < 10; i++) lastYears.push(currentYear - i);

  const [yearFilter, setYearFilter] = useState();

  function ExpenseFilterHandler(e) {
    setYearFilter(e.target.value);
    props.onExpensesFilterChange(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={ExpenseFilterHandler}>
          {lastYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
