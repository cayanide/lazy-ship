// src/components/RoleSelection.js

import React from "react";
import { useHistory } from "react-router-dom";

const RoleSelection = () => {
  const history = useHistory();

  const handleRoleSelection = (role) => {
    if (role === "customer") {
      history.push("/customer-login");
    } else if (role === "captain") {
      history.push("/captain-login");
    }
  };

  return (
    <div>
      <h2>Welcome to LazyShip!</h2>
      <p>Please select your role:</p>
      <button onClick={() => handleRoleSelection("customer")}>Customer</button>
      <button onClick={() => handleRoleSelection("captain")}>Captain</button>
    </div>
  );
};

export default RoleSelection;
