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

    default:
      return state;
  }
};
export default employeeReducer;
