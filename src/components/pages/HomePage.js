import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
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
        <Button.Group>
          <Button animated>
            <Button.Content visible primary as={Link} name="login" to="/login">
              Login
            </Button.Content>
            <Button.Content hidden primary as={Link} name="login" to="/login">
              <Icon name="sign-in" />
            </Button.Content>
          </Button>
          <Button animated>
            <Button.Content
              visible
              primary
              as={Link}
              name="signup"
              to="/signup"
            >
              Signup
            </Button.Content>
            <Button.Content hidden primary as={Link} name="signup" to="/signup">
              <Icon name="signup" />
            </Button.Content>
          </Button>
        </Button.Group>

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
