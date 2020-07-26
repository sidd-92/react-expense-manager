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
      <Router basename="/manager">
        <React.Suspense fallback={<ProgressSpinner />}>
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
