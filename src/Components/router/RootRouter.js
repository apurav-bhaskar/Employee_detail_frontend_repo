import React from "react";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "../employeeDetails/AddEmployee";
import EmployeeDetails from "../employeeDetails/EmployeeDetails";
import EditEmployee from "../employeeDetails/EditEmployee";
import Error from "../error/Error";
import Login from "../userDetails/Login";
import SignUp from "../userDetails/SignUp";

const RootRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route  path="/signup" element={<SignUp />}></Route>
        <Route exact path="/addEmployee" element={<AddEmployee />}></Route>
        <Route exact path="/editEmployee" element={<EditEmployee />}></Route>
        <Route exact path="/homepage" element={<EmployeeDetails />}></Route>
        <Route path="*" element={<Error />}></Route>
        
      </Routes>
    </div>
  );
};

export default RootRouter;
