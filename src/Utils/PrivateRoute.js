import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component, ...rest }) {
  const isAuthfun = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };

  const auth = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthfun() ? component : <Redirect to="/" />;
      }}
    />
  );
}

export default PrivateRoute;
