import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { withAdmin } from "./context/AdminProvider";
import { withPost } from "./context/PostProvider";
import AuthContainer from "./components/auth/AuthContainer";
import ProtectedRoute from "./shared/ProtectedRoutes";
import AdminPage from "./components/AdminPage";
import TopNav from "./components/TopNav";
import "./styles.css";
import Master from "./components/Master";
import BookRetreat from "./components/BookRetreat";

const App = props => {
  const { token } = props;
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Master} />
        <Route path="/book" component={BookRetreat} />
        <Route
          path="/login"
          render={routerProps =>
            token ? (
              <Redirect to="/admin" />
            ) : (
              <AuthContainer {...routerProps} />
            )
          }
        />
        <ProtectedRoute
          token={token}
          path="/admin"
          redirectTo="/login"
          component={AdminPage}
        />
      </Switch>
    </div>
  );
};

export default withRouter(withAdmin(withPost(App)));
