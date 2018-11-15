import { USER_SIGNED_IN } from "../types";
import api from "../api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    dispatch(userLoggedIn(user));
  });
