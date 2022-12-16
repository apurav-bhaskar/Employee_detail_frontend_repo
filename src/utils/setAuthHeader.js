import axios from "axios";
export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      secret_this_should_be_longer: token,
    };
  } else {
    delete axios.defaults.headers.secret_this_should_be_longer;
  }
};

