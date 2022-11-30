import * as action from "../actions/types";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case action.VERIFY_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default userReducer;
