import * as types from "./types";
import employeeService from "../services/employeeService";

export const retrieveEmployees = (employees) => ({
  type: types.RETRIEVE_EMPLOYEE,
  payload: employees,
});

export const employeeDeleted = () => ({
  type: types.DELETE_EMPLOYEE,
});

export const employeeAdded = () => ({
  type: types.ADD_EMPLOYEE,
});

export const employeeUpdated = () => ({
  type: types.EDIT_EMPLOYEE,
});

export const loadEmployees = () => {
  return function (dispatch) {
    employeeService
      .getEmp()
      .then((resp) => {
        dispatch(retrieveEmployees(resp));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteEmployee = (id) => {
  return function (dispatch) {
    employeeService
      .deleteEmp(id)
      .then((resp) => {
        dispatch(employeeDeleted());
        dispatch(loadEmployees());
      })
      .catch((error) => console.log(error));
  };
};

export const addEmployee = (inputs) => {
  return function (dispatch) {
    employeeService
      .addEmp(inputs)
      .then((resp) => {
        dispatch(employeeAdded());
        dispatch(loadEmployees());
      })
      .catch((error) => console.log(error));
  };
};


export const editEmployee = (inputs,id) => {
  return function (dispatch) {
    employeeService
      .updateEmp(inputs,id)
      .then((resp) => {
        dispatch(employeeUpdated());
        dispatch(loadEmployees());
      })
      .catch((error) => console.log(error));
  };
};
