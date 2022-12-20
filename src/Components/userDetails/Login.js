import React, { useEffect } from "react";
import styles from "./styles/loginStyles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAction, { verifyUser } from "../../actions/userAction";
import { Link } from "react-router-dom";
import { loadEmployees } from "../../actions/employeeAction";
import axios from "axios";
import { setAuthHeader } from "../../utils/setAuthHeader";
import { Navigate } from "react-router-dom";
const Login = () => {
  const classes = styles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email_id: "",
    password: "",
  });
  const { email_id, password } = inputs;
  const handleChange = (event) => {
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const { verifyUser } = userAction();
  const handleSubmit = (event) => {
    //dispatch(verifyUser(inputs));
    //navigate("/homepage");
    axios.post(`http://localhost:5000/login`,inputs)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("tokenDetail", res.data.token);
         setAuthHeader(res.data.token);
         console.log("LOGGED IN");
         navigate("/homepage");
      } 
      else {
        const error = new Error(res.error);
        throw error;
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.formStyle}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="email"
            name="email_id"
            value={email_id}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={handleChange}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onChange={handleChange}
        >
          Login
        </button>
        <br />

        <Link to="/signup" className="btn btn-success">
          Don't have an account SignUp!
        </Link>
      </form>
    </>
  );
};

export default Login;
