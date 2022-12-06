import * as types from "./types";
import userService from "../services/userService";

export const userVerified = () => ({
  type: types.VERIFY_USER,
});

export const userCreated = () => ({
  type: types.CREATE_USER,
});

export const verifyUser = (inputs) => {
  return function (dispatch) {
    userService
      .verifyUser(inputs)
      .then((resp) => {
        dispatch(userVerified());
      })
      .catch((error) => console.log(error));
  };
};

export const createUser = (inputs) => {
  return function (dispatch) {
    userService
      .createUser(inputs)
      .then((resp) => {
        dispatch(userCreated());
      })
      .catch((error) => console.log(error));
  };
};
