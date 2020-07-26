import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
export default class Welcome extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="text-center text-4xl p-4">
          Welcome To Expense Manager
        </div>
        <div className="w-full flex justify-center">
          <Button
            onClick={() => {
              this.props.history.push("/home");
            }}
            label="Go To Dashboard"
            className="w-1/6  font-bold text-4xl"
          />
          <Button label="Go To Expenses" className="w-1/6 font-bold text-4xl" />
        </div>
      </div>
    );
  }
}
