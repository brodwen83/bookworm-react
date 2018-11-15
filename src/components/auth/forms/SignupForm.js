import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Label, Message } from "semantic-ui-react";

import Validator from "validator";

class SignupForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    console.log("submitted");
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  onFocus = e => {
    if (this.state.errors) {
      this.setState({
        errors: { ...this.state.errors, [e.target.name]: "" }
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "password can't be blank";
    else if (data.password.length < 5 || data.password.length > 30)
      errors.password = " password length should at least 6-12 long";

    if (Validator.isEmpty(data.email))
      errors.email = "email should not be empty";
    else if (!Validator.isEmail(data.email)) errors.email = "invalid email";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={loading}>
          {errors.global && (
            <Message negative>
              <Message.Header>Something went wrong...</Message.Header>
              <p>{errors.global}</p>
            </Message>
          )}
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              value={data.email}
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              onChange={this.onChange}
              onFocus={this.onFocus}
            />
            {errors.email && (
              <Label basic color="red" pointing>
                {errors.email}
              </Label>
            )}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              value={data.password}
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={this.onChange}
              onFocus={this.onFocus}
            />
            {errors.password && (
              <Label basic color="red" pointing>
                {errors.password}
              </Label>
              // <InlineError text={errors.password} />
            )}
          </Form.Field>
          <Button primary>Signup</Button>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
