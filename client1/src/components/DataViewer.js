import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import React, { Component } from "react";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

class DataViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          vin: "Vin",
          year: "2020",
          brand: "N/A",
          color: "Red",
        },
        {
          vin: "Vin",
          year: "2020",
          brand: "N/A",
          color: "Red",
        },
        {
          vin: "Vin",
          year: "2020",
          brand: "N/A",
          color: "Red",
        },
        {
          vin: "Vin",
          year: "2020",
          brand: "N/A",
          color: "Red",
        },
      ],
    };
    this.renderGridItem = this.renderGridItem.bind(this);
  }
  renderGridItem(car) {
    debugger;
    return <div>{car.year}</div>;
  }

  render() {
    return (
      <React.Fragment>
        <DataView
          value={this.state.cars}
          layout={"grid"}
          itemTemplate={this.renderGridItem}
        />
      </React.Fragment>
    );
  }
}

export default DataViewer;
