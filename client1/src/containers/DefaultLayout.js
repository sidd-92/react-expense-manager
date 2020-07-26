import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { ProgressSpinner } from "primereact/progressspinner";
import { SlideMenu } from "primereact/slidemenu";

import routes, {
  linkExpenses,
  linkCategories,
  linkBudget,
  linkHome,
} from "../routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    this.items = [
      {
        label: "Logo",
        icon: "pi pi-fw pi-home",
        className: "text-xl ",
        command: (event) => {
          this.props.history.push("/home");
        },
      },
    ];
  }
  render() {
    return (
      <div className="container max-w-full overflow-x-hidden">
        <div className="bg-blue-700 text-white m-0 p-0 overflow-hidden shadow-md pb-2 sm:pb-0">
          <div
            onClick={() => {
              this.props.history.push(linkHome);
            }}
            className="float-none sm:float-left ml-3 sm:ml-6 py-2 sm:py-0"
          >
            <div className=" cursor-pointer block text-xl font-bold text-left sm:text-center hover:bg-blue-600 hover:text-white active">
              Expense Manager
            </div>
          </div>
          <div
            className="float-none sm:float-left ml-3 sm:ml-6 py-1"
            onClick={() => {
              this.props.history.push(linkExpenses);
            }}
          >
            <div className=" cursor-pointer block font-semibold text-left sm:text-center hover:bg-blue-600 hover:text-white active">
              Expenses
            </div>
          </div>
          <div
            onClick={() => {
              this.props.history.push(linkCategories);
            }}
            className="float-none sm:float-right ml-3 sm:ml-0 py-2 sm:py-1  pr-0 sm:pr-2"
          >
            <div className=" cursor-pointer block font-semibold text-left sm:text-center hover:bg-blue-600 hover:text-white active px-0 sm:px-2">
              Categories
            </div>
          </div>
          <div
            onClick={() => {
              this.props.history.push(linkBudget);
            }}
            className="float-none sm:float-right ml-3 sm:ml-0 py-2 sm:py-1 pr-0 sm:pr-2"
          >
            <div className=" cursor-pointer block font-semibold text-left sm:text-center hover:bg-blue-600 hover:text-white active px-0 sm:px-2">
              Budget
            </div>
          </div>
        </div>
        <main className="m-3 sm:m-6">
          <Suspense fallback={<ProgressSpinner />}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <route.component {...props} routes={route.routes} />
                    )}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default DefaultLayout;
