import React from "react";
import AnalyticsCard from "./components/AnalyticsCard";
import ExpenseList from "./components/ExpenseList";
import Button from "react-bootstrap/Button";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <AnalyticsCard />
        <div>
          <Button className="addExpenseButton" variant="primary">
            Add Expense
          </Button>
        </div>
        <ExpenseList />
      </div>
    );
  }
}

export default App;
