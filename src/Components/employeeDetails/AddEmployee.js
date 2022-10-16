import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/addEmployeeStyles";

const AddEmployee = () => {
  const classes = styles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    navigate("/");
  };
  return (
    <div className={classes.formStyle}>
      <form onSubmit={handleSubmit}>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Employee Name</label>

          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            className="form-control"
            id="name"
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
            name="job"
            value={inputs.job || ""}
            className="form-control"
            id="job"
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
            name="hireDate"
            value={inputs.hireDate || ""}
            className="form-control"
            id="hireDate"
            placeholder="Enter Date Of onboarding"
            required
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Department</label>
          <input
            type="text"
            name="dept"
            value={inputs.dept || ""}
            className="form-control"
            id="dept"
            placeholder="Enter Department Name"
            required
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
