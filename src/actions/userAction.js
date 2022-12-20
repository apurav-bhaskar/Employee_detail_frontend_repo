import * as types from "./types";
import userService from "../services/userService";
import { setAuthHeader, isLoggedIn } from "../utils/setAuthHeader";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default (props) => {
  const userVerified = () => ({
    type: types.VERIFY_USER,
  });

  const userCreated = () => ({
    type: types.CREATE_USER,
  });

  const verifyUser = (inputs) => {
    return function (dispatch) {
      userService
        .verifyUser(inputs)
        .then((res) => {
          dispatch(userVerified());
          if (res.status === 200) {
            localStorage.setItem("tokenDetail", res.data.token);
            setAuthHeader(res.data.token);
           window.location.reload(true);
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Error logging in please try again");
        });
      
    };
  };

  const createUser = (inputs) => {
    return function (dispatch) {
      userService
        .createUser(inputs)
        .then((resp) => {
          dispatch(userCreated());
        })
        .catch((error) => console.log(error));
    };
  };

  return {
    verifyUser: verifyUser,
    createUser: createUser,
  };
};
