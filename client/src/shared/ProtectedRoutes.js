import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = props => {
  const { token, path, redirectTo, component: Component, ...rest } = props;
  return token ? (
    <Route
      path={path}
      render={routeProps => <Component {...routeProps} {...rest} />}
    />
  ) : (
    <Redirect to={redirectTo} />
  );
};

export default ProtectedRoutes;
