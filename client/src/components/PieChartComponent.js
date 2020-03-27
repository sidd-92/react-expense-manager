import React from "react";
import PieChart from "react-minimal-pie-chart";

class PieChartComponent extends React.Component {
  render() {
    let { styleObject, dataArray } = this.props;
    return (
      <PieChart
        style={{
          position: "absolute",
          top: "76px",
          left: "-45px",
          height: "151px"
        }}
        label
        labelPosition={50}
        labelStyle={{
          fill: "white",
          fontFamily: "sans-serif",
          fontSize: "15px"
        }}
        viewBoxSize={[100, 100]}
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" }
        ]}
      />
    );
  }
}

export default PieChartComponent;
