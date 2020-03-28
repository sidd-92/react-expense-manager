import React from "react";
import App from "./App";
import Settings from "./components/Settings";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div class="sidenav">
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <Switch>
            <Route path="/settings">
              <div class="main">
                <Settings />
              </div>
            </Route>
            <Route path="/profile">
              <div class="main">
                <h2>Sidebar</h2>
                <p>This sidebar is of full height (100%) and always shown.</p>
                <p>Scroll down the page to see the result.</p>
                <p>
                  Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                  illum definitiones no quo, maluisset concludaturque et eum,
                  altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                  omnis evertitur eum. Affert laboramus repudiandae nec et.
                  Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
                </p>
                <p>
                  Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                  illum definitiones no quo, maluisset concludaturque et eum,
                  altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                  omnis evertitur eum. Affert laboramus repudiandae nec et.
                  Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
                </p>
                <p>
                  Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                  illum definitiones no quo, maluisset concludaturque et eum,
                  altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                  omnis evertitur eum. Affert laboramus repudiandae nec et.
                  Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
                </p>
                <p>
                  Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                  illum definitiones no quo, maluisset concludaturque et eum,
                  altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                  omnis evertitur eum. Affert laboramus repudiandae nec et.
                  Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
                </p>
              </div>
            </Route>
            <Route path="/">
              <div class="main">
                <App />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
