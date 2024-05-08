import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Common/Header";
import OrderForm from "./components/Customer/OrderForm";
import Payment from "./components/Customer/Payment";
import Dashboard from "./components/Captain/Dashboard";
import OrdersList from "./components/Captain/OrdersList";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* Home or Landing Page */}
          </Route>
          <Route path="/customer/order">
            <OrderForm />
          </Route>
          <Route path="/customer/payment">
            <Payment amount={150} />
          </Route>
          <Route path="/captain/dashboard">
            <Dashboard />
          </Route>
          <Route path="/captain/orders">
            <OrdersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
