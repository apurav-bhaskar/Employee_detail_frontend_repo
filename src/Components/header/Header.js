import React from "react";
import styles from "./styles/headerStyles";
import logo from "./logo/employee_logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core/";
const Header = () => {
  const classes = styles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.headerTitle}>
          <Avatar src={logo}></Avatar>
          <div className={classes.title}>
            <Typography variant="h6">Employee Details</Typography>
          </div>
        </div>
        <div className={classes.addButton}>
          <Button color="inherit">Add Employee</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
