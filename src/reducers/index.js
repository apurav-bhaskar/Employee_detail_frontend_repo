import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  allEmployees: employeeReducer,
  allUsers: userReducer
});
export default reducers;
