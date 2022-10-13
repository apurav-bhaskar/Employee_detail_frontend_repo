import React from 'react'
import styles from './styles/headerStyles'
import {AppBar,Toolbar,IconButton,Typography,Button} from '@material-ui/core/';
const Header = () => {
  const classes=styles();
  return (
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Employee Details
    </Typography>
    <div className={classes.addButton}>
    <Button color="inherit">Add Employee</Button>
    </div>
  </Toolbar>
</AppBar>

  )         
}

export default Header