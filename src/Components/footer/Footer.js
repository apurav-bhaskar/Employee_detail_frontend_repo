import { Box } from "@material-ui/core";
import React from "react";
import styles from "./styles/footerStyles";

export default function Footer() {
  const classes = styles();
  return (
    <Box className={classes.footer}>
      <div>@Copyright2022 EmployeeDetails</div>
    </Box>
  );
}
