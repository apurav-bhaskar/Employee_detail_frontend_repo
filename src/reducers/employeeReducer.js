import * as action from "../actions/types";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case action.RETRIEVE_EMPLOYEE:
      return {
        ...state,

        employees: payload,
      };

    case action.DELETE_EMPLOYEE:
      return {
        ...state,
      };

    case action.ADD_EMPLOYEE:
      return {
        ...state,
      };

    case action.EDIT_EMPLOYEE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default employeeReducer;
