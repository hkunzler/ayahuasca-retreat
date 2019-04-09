import React from 'react';
import { Switch, Route, Redirect, withRouter, Link } from "react-router-dom";
import AuthContainer from "./auth/AuthContainer";
import ProtectedRoute from "../shared/ProtectedRoutes";
import AdminPage from "./AdminPage";
import NotFound from "./NotFound";
import { withAdmin } from "../context/AdminProvider";


const Login = (props) => {
    const { admin, token, logout } = props
    return (
      <div>
        <Switch>
          <ProtectedRoute
            token={token}
            path="/admin"
            redirectTo="/login" 
            component={AdminPage}
            username={admin.username}
            logout={logout}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
};

export default withAdmin(Login);