import React from "react";
import styles from "./styles/loginStyles";
import  { useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../actions/userAction";

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
  const handleSubmit = () => {
    dispatch(verifyUser(inputs));
    navigate("/");
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className={classes.formStyle}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email_id"
          value={email_id}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          class="form-control"
          id="exampleInputPassword1"
          required
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary" onChange={handleChange}>
        Login
      </button>
    </form>
  );
};

export default Login;
