import React, { Component } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { linkBase } from "./routes";
// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const Welcome = React.lazy(() => import("./components/views/Welcome"));
class App extends Component {
  render() {
    return (
      <Router basename="/">
        <React.Suspense fallback={<ProgressSpinner />}>
          <Switch>
            <Route
              path="/home"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
            <Route
              path={linkBase}
              name="Welcome"
              render={(props) => <Welcome {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
