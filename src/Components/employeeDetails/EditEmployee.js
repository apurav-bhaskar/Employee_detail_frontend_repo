import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles/addEmployeeStyles";
import { editEmployee } from "../../actions/employeeAction";
import departmentService from "../../services/departmentService";

const EditEmployee = () => {
  const classes = styles();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const employeeToEdit = location.state;
  const [dept, setDept] = useState([]);
  const [inputs, setInputs] = useState({
    emp_name: employeeToEdit.emp_name,
    job_name: employeeToEdit.job_name,
    hire_date: employeeToEdit.hire_date,
    dept_id: employeeToEdit.dept_id,
  });
  const { emp_name, job_name, hire_date, dept_id } = inputs;

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(editEmployee(inputs, employeeToEdit.emp_id));
    navigate("/");
  };
  useEffect(() => {
    departmentService.fetchDept().then((allDept) => {
      setDept(allDept);
    });
  }, []);

  return (
    <div className={classes.formStyle}>
      <form onSubmit={handleSubmit}>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Employee Name</label>

          <input
            type="text"
            name="emp_name"
            value={emp_name}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter employee Name"
            required
            onChange={handleChange}
          />

          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Job Name</label>

          <input
            type="text"
            name="job_name"
            value={job_name}
            className="form-control"
            placeholder="Enter Job name"
            required
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Hire Date</label>
          <input
            type="text"
            name="hire_date"
            value={hire_date}
            className="form-control"
            placeholder="YYYY-MM-DD"
            required
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-group">
          <select
            className="form-control"
            onChange={handleChange}
            value={dept_id}
            name="dept_id"
            id="dept_select"
            required
          >
            <option value="">Select Department</option>

            {dept.map((d, index) => (
              <option key={index} value={d.dept_id}>
                {d.dept_name}
              </option>
            ))}
          </select>
        </div>
        <br />

        <button
          onChange={handleChange}
          type="submit"
          className="btn btn-primary btn-lg"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
