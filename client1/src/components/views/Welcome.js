import React, { Component } from "react";
import { Card } from "primereact/card";
export default class Welcome extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="text-center text-4xl p-4">
          Welcome To Expense Manager
        </div>
        <div className="w-full max flex items-center justify-center">
          <div className="w-1/2">
            <Card title="Title" subTitle="SubTitle">
              Content
            </Card>
          </div>
          <div className="w-1/2">
            <Card title="Title" subTitle="SubTitle">
              Content
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
