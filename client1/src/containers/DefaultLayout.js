import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { SlideMenu } from "primereact/slidemenu";

import routes from "../routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        label: "Home",
        icon: "pi pi-fw pi-file",
        command: (event) => {
          this.props.history.push("/home");
        },
      },
      {
        label: "Expenses",
        icon: "pi pi-fw pi-pencil",
        command: (event) => {
          this.props.history.push("/expenses");
        },
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-user-minus",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
              {
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    label: "Print",
                    icon: "pi pi-fw pi-print",
                  },
                ],
              },
              {
                icon: "pi pi-fw pi-bars",
                label: "List",
              },
            ],
          },
        ],
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
        items: [
          {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
              {
                label: "Save",
                icon: "pi pi-fw pi-calendar-plus",
              },
              {
                label: "Delete",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
          {
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: "Quit",
        icon: "pi pi-fw pi-power-off",
      },
    ];
  }
  render() {
    return (
      <div className="container max-w-full overflow-x-hidden">
        <SlideMenu
          style={{
            height: "100%",
            width: "300px",
            position: "fixed",
            zIndex: "1",
            top: "0",
            left: "0",
            overflowX: "hidden",
            paddingTop: "20px",
            borderTop: "none",
            borderRadius: "0px",
          }}
          model={this.items}
          viewportHeight="600"
          className="bg-black"
          menuWidth="300"
          effectDuration={1000}
          easing="ease-in"
        />
        <main style={{ marginLeft: "320px", padding: "20px" }}>
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
              <Redirect from="/" to="/404" />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default DefaultLayout;
