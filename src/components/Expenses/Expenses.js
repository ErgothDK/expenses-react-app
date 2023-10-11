import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  function ExpensesFilterHandler(yearFilter) {
    setYearFilter(yearFilter);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onExpensesFilterChange={ExpensesFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
