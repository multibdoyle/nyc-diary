import React from 'react';
import ReactDOM from 'react-dom';
import TransparentFunnyLogo from '../../assets/TransparentFunnyLogo.png';
import { createMuiTheme, ThemeProvider, withTheme  } from '@material-ui/core/styles';
import MenuAppBar from '../AppBar/MenuAppBar'
import MenuDrawer from '../AppBar/MenuDrawer'
//import './PageHeader.css'
import theming from '../../themes';
import './PageHeader.css'
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom';


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


class PageHeader extends React.Component 
{ render() {
    return (
<div classname='page-header'>
<h1><Link to='/' style={{ textDecoration: 'none' , color: 'black'}}>Take it EZ, BDZ</Link></h1>
  <h2>< Link to='/' style={{ textDecoration: 'none' , color: 'black'}} name='Home'> Home </Link> + <Link to='/about-me' style={{ textDecoration: 'none', color: 'black' }} name='about-me'> About Me</Link> + <Link to='/get-in-touch' style={{ textDecoration: 'none', color: 'black' }} name='get-in-touch'>Get in Touch</Link></h2>
  </div>
)
}
}


//<ul>
 // <div>< Link to='/' name='Home'> Home </Link> </div>
//<div> <Link to='/about-me' name="about-me" >About Me</Link></div>
 // <div><Link to='/get-in-touch'>Get in Touch</Link></div>
//</ul>
export default PageHeader;