import React from "react";
import Home from "containers/Home";
import Plan from "containers/Plan";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/:planId" component={Plan} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
