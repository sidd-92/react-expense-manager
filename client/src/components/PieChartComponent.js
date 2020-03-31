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
        data={dataArray}
      />
    );
  }
}

export default PieChartComponent;
