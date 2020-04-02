import React from "react";
import PieChart from "react-minimal-pie-chart";

class CompletionPieComponent extends React.Component {
  render() {
    let { styleObject, dataArray } = this.props;
    return (
      <PieChart
        animate={true}
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        style={{
          position: "absolute",
          top: "76px",
          left: "-45px",
          height: "151px"
        }}
        data={dataArray}
        label={({ data, dataIndex }) =>
          Math.round(data[dataIndex].percentage) + "% Spent"
        }
        labelPosition={0}
        labelStyle={{
          fontFamily: "sans-serif",
          fontSize: "11px"
        }}
        lengthAngle={360}
        lineWidth={20}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={50}
        rounded={false}
        startAngle={0}
        totalValue={100}
        viewBoxSize={[100, 100]}
      />
    );
  }
}

export default CompletionPieComponent;
