import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import * as actions from "../store/actions/auth";

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <div>
      <h2>HomePage!</h2>
      {isAuthenticated ? (
        <Button primary onClick={() => logout()}>
          Logout
        </Button>
      ) : (
        <Button primary as={Link} name="login" to="/login">
          Login
        </Button>
        // <Link to="/login" className="ui primary">
        //   Login
        // </Link>
      )}
    </div>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ isAuthenticated: !!state.user.token });

export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
