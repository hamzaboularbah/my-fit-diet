import React from "react";
import Home from "containers/Home";
import Plan from "containers/Plan";
import Header from "components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/:planId" component={Plan} />
          <Route exact path="/" component={Home} />
        </AnimatedSwitch>
      </Router>
    </React.Fragment>
  );
}

export default App;
