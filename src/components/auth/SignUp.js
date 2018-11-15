import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./forms/SignupForm";
import { connect } from "react-redux";
import { signup } from "../store/actions/users";

class SignUp extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(
  null,
  { signup }
)(SignUp);
