import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEmployees } from "../../actions/employeeAction";

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.allEmployees.employees);
  useEffect(() => {
    dispatch(loadEmployees());
  }, []);

  return (
    <>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Employee_Name</th>
            <th scope="col">Job</th>
            <th scope="col">Hire_Date</th>
            <th scope="col">Department</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {employees.map((employees) => (
          <tbody>
            <tr>
              <td>{employees.name}</td>
              <td>{employees.job}</td>
              <td>{employees.hireDate}</td>
              <td>{employees.department}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default EmployeeDetails;
