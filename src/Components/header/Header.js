import React from "react";
import styles from "./styles/headerStyles";
import logo from "./logo/employee_logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  MenuItem,
} from "@material-ui/core/";
const Header = () => {
  const classes = styles();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokenDetail");
    navigate("/");
    window.location.reload("/");
  }

  return (
    <AppBar position="relative">
      <Toolbar>
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
        <div className={classes.addButton}>
          <Link to="/addEmployee" className={classes.linkStyle}>
            <Button style={{ color: "white" }}>Add Employee</Button>
          </Link>
        </div>
        <div className={classes.logoutButton}>
         
            <Button style={{ color: "white" }} onClick={handleLogout}>Logout</Button>
         
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
