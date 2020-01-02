import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));


const MenuLink = ({ to, name }) => {
  return (
    <div className="navButtonContainer">
      <Link to={to}>
        <button type="button" className="navButtonBody">
          {name}
        </button>
      </Link>
    </div>
  )
}









export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
//What event are we checking? What is happening here?///
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
//What does setAnchorEl do?//
  const handleClose = event => {
    setAnchorEl(null);
  };
//What are FormGroup and FormControlLabel doing?
//What is classes.root doing?
//How do I make this drawer menu open? And link to the different pages?
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="green" aria-label="menu" aria-haspopup="true" onClick={handleClick}  onMouseOver={handleClick} >
            <MenuIcon />
          </IconButton>
          {auth && (
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
               keepMounted
              transformOrigin={{
                  vertical: 'top',
                 horizontal: 'left',
               }}
                open={open}
               //={handleClose}
                onClick={handleClick}
        onMouseOver={handleClick}
        MenuListProps={{ onMouseLeave: handleClose }}
              >
               
                <MenuLink onClick={handleClose} to='/' name="Home" >Home</MenuLink>
                <MenuLink onClick={handleClose} to='/cookies' name="Cookies" >Genetics</MenuLink>
                <MenuLink onClick={handleClose} to='/genetics' name='Genetics'>Cookies</MenuLink>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}