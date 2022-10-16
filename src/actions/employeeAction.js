import * as types from "./types";
import employeeService from "../services/employeeService";

export const retrieveEmployees = (employees) => ({
  type: types.RETRIEVE_EMPLOYEE,
  payload: employees,
});
export const loadEmployees = () => {
  return function (dispatch) {
    employeeService
      .get()
      .then((resp) => {
        dispatch(retrieveEmployees(resp));
      })
      .catch((error) => console.log(error));
  };
};
