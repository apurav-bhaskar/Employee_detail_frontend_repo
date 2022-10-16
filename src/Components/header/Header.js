import React from "react";
import styles from "./styles/headerStyles";
import logo from "./logo/employee_logo.png";
import { Link } from "react-router-dom";
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
  return (
    <AppBar position="relative">
      <Toolbar>
        <div className={classes.headerTitle}>
          <Link to="/">
            <Avatar src={logo}></Avatar>
          </Link>

          <div className={classes.title}>
            <Link to="/" className={classes.linkStyle}>
              {" "}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
