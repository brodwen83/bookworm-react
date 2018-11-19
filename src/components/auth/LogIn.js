import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import MyCustomHeader from "../messages/MyCustomHeader";

class LogIn extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        {/* <h2>Login</h2> */}
        <MyCustomHeader icon="sign-in" header="Login" subheader="Login user" />
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

// const mapStateToProps = {
//   login: {}
// };

LogIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LogIn);
