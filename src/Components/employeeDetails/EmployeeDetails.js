import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEmployees, deleteEmployee } from "../../actions/employeeAction";
import Moment from "moment";

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.allEmployees.employees);
  const hire_date = Moment(employees.hire_date).format("YYYY-MM-DD");
  useEffect(() => {
    dispatch(loadEmployees());
  }, []);

  const handleDelete = async (id) => {
    dispatch(deleteEmployee(id));
  };
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
              <td>{employees.emp_name}</td>
              <td>{employees.job_name}</td>
              <td>{hire_date}</td>
              <td>{employees.dept_name}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(employees.emp_id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
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
