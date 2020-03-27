import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./styles/analytics.module.css";
import PieChartComponent from "./PieChartComponent";
import CompletionPieComponent from "./CompletionPieComponent";
import Button from "react-bootstrap/Button";
class AnalyticsCard extends React.Component {
  render() {
    return (
      <div className={styles.analyticsMain}>
        <Card className={styles.analyticsBase}>
          <Card.Header>Budget Overview</Card.Header>
          <Card.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CompletionPieComponent />
            </div>
          </Card.Body>
        </Card>
        <Card className={styles.analyticsBase}>
          <Card.Header>Split By Category</Card.Header>
          <Card.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <PieChartComponent />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AnalyticsCard;
