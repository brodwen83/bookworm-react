import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LogIn from "./auth/LogIn";

import "../styles.css";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={LogIn} />
      </div>
    );
  }
}

export default App;
