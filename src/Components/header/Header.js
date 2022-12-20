import React, { useEffect } from "react";
import styles from "./styles/headerStyles";
import logo from "./logo/employee_logo.png";
import { Link, useNavigate } from "react-router-dom";
import withToggle from "./ToggleHOC";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core/";
import { connect } from "react-redux";
import { render } from "react-dom";



const Header = ({ toggle,toggleStatus }) => {
  const classes = styles();
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.removeItem("tokenDetail");
    navigate("/");
   
    window.location.reload("/");
  };
  console.log(toggleStatus)

  return (
    <AppBar position="relative">
      <Toolbar>
        { !toggleStatus && (
          <div className={classes.headerTitle}>
            <Link to="/signup" className={classes.linkStyle}>
              <Typography style={{ color: "white" }}>Sign Up!</Typography>
            </Link>
            <div className={classes.mainTitle}>
              <Link to="/" className={classes.linkStyle}>
                <Typography style={{ color: "white" }}>Login</Typography>
              </Link>
            </div>
          </div>
        )}
    
        {toggleStatus && (
          <div className={classes.headerTitle}>
            <Link to="/homepage">
              <Avatar src={logo}></Avatar>
            </Link>

            <div className={classes.title}>
              <Link to="/homepage" className={classes.linkStyle}>
                <Typography style={{ color: "white" }}>
                  Employee Details
                </Typography>
              </Link>
            </div>
          </div>
        )}

        {toggleStatus && (
          <div className={classes.addButton}>
            <Link to="/addEmployee" className={classes.linkStyle}>
              <Button style={{ color: "white" }}>Add Employee</Button>
            </Link>
          </div>
        )}

        {toggleStatus && (
          <div className={classes.logoutButton}>
            <Button style={{ color: "white" }} onClick={()=>{handleLogout();toggle()}} >
              Logout
            </Button>
          </div>
        )}
        
      </Toolbar>
    </AppBar>
  );
};


export default withToggle(Header);
