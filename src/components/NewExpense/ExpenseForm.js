import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [formData, setFormData] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // setFormData({
    //   ...formData,
    //   enteredTitle: event.target.value,
    // });

    // setFormData((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setFormData({
    //   ...formData,
    //   enteredAmount: event.target.value,
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setFormData({
    //   ...formData,
    //   enteredDate: event.target.value,
    // });
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;