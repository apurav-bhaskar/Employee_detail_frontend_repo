import { Box } from '@material-ui/core';
import React from "react";
import styles from "./styles/footerStyles"

export default function Footer() {
  const classes=styles();
  return (
    // <footer className=" fixed-bottom bg-dark text-light py-0.3  ">
    //   <p className="text-center p-1">@Copyright2022 EmployeeDetails</p>
    // </footer>
    <Box className={classes.footer}>
      <div>
      @Copyright2022 EmployeeDetails
      </div>
    </Box>
  );
}
