import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./styles/analytics.module.css";
import PieChartComponent from "./PieChartComponent";
import CompletionPieComponent from "./CompletionPieComponent";
import axios from "axios";
import Button from "react-bootstrap/Button";
class AnalyticsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpense: 0
    };
  }
  componentDidMount() {
    this.getExpenses();
  }
  getExpenses = async () => {
    let expenses = await axios.get(`/api/expenses`);
    let listOfExpenses = expenses.data.expenses;
    let totalExpense = this.state.totalExpense;
    for (let i = 0; i < listOfExpenses.length; i++) {
      totalExpense += listOfExpenses[i].itemAmount;
    }
    console.log("Total", totalExpense);
    this.setState({ totalExpense });
  };

  render() {
    let { totalBudget } = this.props;
    let { totalExpense } = this.state;
    return (
      <div className={styles.analyticsMain}>
        <Card className={styles.analyticsBase}>
          <Card.Header>Budget Overview</Card.Header>
          <Card.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CompletionPieComponent
                dataArray={[
                  {
                    color: "#E38627",
                    value: (totalExpense / totalBudget) * 100 || 0
                  }
                ]}
              />
              <div
                style={{ position: "absolute", right: "100px", top: "70px" }}
              >
                <div>
                  <h5>Total Budget</h5>
                  <p>Rs.{totalBudget}</p>
                </div>
                <div>
                  <h5>Total Expense</h5>
                  <p>Rs. {totalExpense}</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className={styles.analyticsBase}>
          <Card.Header>Split By Category</Card.Header>
          <Card.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <PieChartComponent
                dataArray={[
                  { title: "Grocery", value: 80, color: "#E38627" },
                  { title: "Electricity", value: 15, color: "#C13C37" },
                  { title: "Food", value: 20, color: "#6A2135" },
                  { title: "Grocery", value: 40, color: "#E38627" },
                  { title: "Electricity", value: 5, color: "#C13C37" },
                  { title: "Food", value: 2, color: "#6A2135" }
                ]}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AnalyticsCard;
