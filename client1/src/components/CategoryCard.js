import React, { Component } from "react";

import { Card } from "primereact/card";

export default class CategoryCard extends Component {
  render() {
    return (
      <Card
        {...this.props}
        className="rounded-lg shadow-2xl noselect flex items-center justify-center"
      >
        {this.props.content}
      </Card>
    );
  }
}
