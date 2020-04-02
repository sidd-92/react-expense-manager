import React from "react";
import AnalyticsCard from "./components/AnalyticsCard";
import ExpenseList from "./components/ExpenseList";
import { connect } from "react-redux";
import {
  createNewExpense,
  getCategories,
  getBudget,
  getExpenses
} from "./store/actions";
import "./App.css";
const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    getListOfCategories: () => {
      dispatch(getCategories());
    },
    getUpdatedBudget: () => {
      dispatch(getBudget());
    }
  };
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      itemName: "",
      itemPrice: 0,
      currentSelectValue: "",
      dateValue: Date.now(),
      itemNameError: false,
      updateExpense: false,
      itemPriceError: false
    };
  }
  componentDidMount() {
    this.props.getUpdatedBudget();
    //console.log("REDUX STATE", this.props.reduxState);
  }
  render() {
    return (
      <div>
        <ExpenseList />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
