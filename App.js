// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoleSelection from "./components/RoleSelection";
import CustomerLogin from "./components/Customer/CustomerLogin";
import CaptainLogin from "./components/Captain/CaptainLogin";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={RoleSelection} />
          <Route path="/customer-login" component={CustomerLogin} />
          <Route path="/captain-login" component={CaptainLogin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
