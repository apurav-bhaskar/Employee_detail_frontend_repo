import React from 'react'
import styles from "./styles/loginStyle";
const Login = () => {
    const classes = styles();
  return (
    <form className={classes.formStyle}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required/>
  </div>
  <br/>
  <button type="submit" class="btn btn-success">Login</button>
</form>
  )
}

export default Login