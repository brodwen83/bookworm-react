import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LogIn from "./auth/LogIn";

import "../styles.css";
import DashboardPage from "./pages/DashboardPage";
import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";
import SignUp from "./auth/SignUp";

const App = ({ location }) => {
  return (
    <div className="ui container">
      <Route location={location} path="/" exact component={Homepage} />
      <GuestRoute location={location} path="/login" exact component={LogIn} />
      <GuestRoute location={location} path="/signup" exact component={SignUp} />
      <UserRoute
        location={location}
        path="/dashboard"
        exact
        component={DashboardPage}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
