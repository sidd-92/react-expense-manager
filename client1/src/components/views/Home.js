import React, { Component } from "react";
import CardButton from "../CardButton";
import { DataTable } from "primereact/datatable";
import { linkCategories, linkExpenses } from "../../routes";
import { Column } from "primereact/column";
import DataViewer from "../DataViewer";
import { Button } from "primereact/button";
import CategoryCard from "../CategoryCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      expenses: [
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },

        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },

        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
        {
          date: "10/20/2020",
          name: "Milk",
          amount: "12.00",
          category: "Diary",
        },
        {
          date: "10/20/2020",
          name: "Light Bulb",
          amount: "12.00",
          category: "Electricity",
        },
      ],
      first20Categories: [],
    };
  }
  componentDidMount() {
    let cars = [];
    let category = [];
    for (let i = 0; i < 300; i++) {
      let obj = {
        vin: i,
        year: `200${i}`,
        brand: `helmet${i}`,
        color: `green${i}`,
      };
      category.push({ name: `Category${i}`, id: i });
      cars.push(obj);
    }
    this.setState({ cars, categories: category }, () => {
      this.takeFirst20Categories();
    });
  }

  takeFirst20Categories = () => {
    let categories = this.state.categories;
    let first20 = [];
    for (let i = 0; i < 24; i++) {
      first20.push(categories[i]);
    }
    this.setState({ first20Categories: [] });
  };

  actionTemplate(rowData, column) {
    return (
      <div className="w-full">
        <Button
          type="button"
          icon="pi pi-pencil"
          className="p-button-warning"
        ></Button>
      </div>
    );
  }

  render() {
    return (
      <div class="w-full rounded overflow-hidden noselect">
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 bg-blue-100 p-6 mb-6">
          <CardButton
            title={"Add Expense"}
            textClassname="text-white"
            bgClassname="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500"
          />

          <CardButton
            title={"Add Category"}
            textClassname="text-white"
            bgClassname="transition duration-500 ease-in-out bg-green-600 hover:bg-red-500"
          />

          <CardButton
            title={"Add Income"}
            textClassname="text-black hover:text-white"
            bgClassname="transition duration-500 ease-in-out bg-yellow-500 hover:bg-red-500"
          />

          <CardButton
            title={"Add Budget"}
            textClassname="text-white"
            bgClassname="transition duration-500 ease-in-out bg-btncolor1 hover:bg-red-500"
          />
        </div>
        <div className="bg-blue-100 p-6 mb-6">
          {this.state.expenses.length > 0 ? (
            <React.Fragment>
              <div className="text-xl font-semibold pb-2">
                All Your Categories
              </div>
              <DataTable
                paginator={true}
                rows={10}
                responsive={true}
                ref={(el) => (this.dt = el)}
                value={this.state.expenses}
              >
                <Column
                  headerStyle={{
                    backgroundColor: "#63b3ed",
                    color: "white",
                    border: "1px solid #edf2f7",
                  }}
                  field="date"
                  header="Date Of Expense"
                  bodyClassName="text-center"
                  bodyStyle={{
                    border: "1px solid #edf2f7",
                  }}
                />
                <Column
                  headerStyle={{
                    backgroundColor: "#63b3ed",
                    color: "white",
                    border: "1px solid #edf2f7",
                  }}
                  field="name"
                  header="Name"
                  bodyClassName="text-center"
                  bodyStyle={{
                    border: "1px solid #edf2f7",
                  }}
                />
                <Column
                  headerStyle={{
                    backgroundColor: "#63b3ed",
                    color: "white",
                    border: "1px solid #edf2f7",
                  }}
                  field="amount"
                  header="Total Amount"
                  bodyClassName="text-center"
                  bodyStyle={{
                    border: "1px solid #edf2f7",
                  }}
                />
                <Column
                  headerStyle={{
                    backgroundColor: "#63b3ed",
                    color: "white",
                    border: "1px solid #edf2f7",
                  }}
                  field="category"
                  header="Category"
                  bodyClassName="text-center"
                  bodyStyle={{
                    border: "1px solid #edf2f7",
                  }}
                />
                <Column
                  header="Action"
                  headerStyle={{
                    backgroundColor: "#63b3ed",
                    color: "white",
                    border: "1px solid #edf2f7",
                    width: "70px",
                  }}
                  body={this.actionTemplate}
                  bodyStyle={{
                    border: "1px solid #edf2f7",
                  }}
                />
              </DataTable>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="text-center">
                Looks Like You Dont Have Any Expenses.{" "}
              </div>
              <div
                onClick={() => {
                  this.props.history.push(linkExpenses);
                }}
                className="text-center font-bold text-base text-blue-800 pt-2 cursor-pointer"
              >
                Add a Expense
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="bg-green-200 p-6 mb-6">
          {this.state.first20Categories.length > 0 ? (
            <React.Fragment>
              <div className="text-xl font-semibold">All Your Categories</div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-8 gap-4 px-2 py-6 h-400px overflow-auto">
                {this.state.first20Categories.map((item) => (
                  <CategoryCard content={item.name} />
                ))}
              </div>
              <div
                onClick={() => {
                  this.props.history.push(linkCategories);
                }}
                className="w-48 cursor-pointer font-light text-blue-600 underline transition duration-500 ease-in-out hover:text-blue-900"
              >
                View More Categories
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="text-center">
                Looks Like You Dont Have Any Categories.{" "}
              </div>
              <div
                onClick={() => {
                  this.props.history.push(linkCategories);
                }}
                className="text-center font-bold text-base text-green-600 pt-2 cursor-pointer"
              >
                Add a Category
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
