import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={changeFilterHandler}
          selectedYear={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
