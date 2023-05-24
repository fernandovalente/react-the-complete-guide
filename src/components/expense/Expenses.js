import ExpensesItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <h2>Let's get started!</h2>
      {props.date.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
