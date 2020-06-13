import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, withTheme } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles'; 
import ResponsiveDrawer from './Components/ResponsiveDrawer/ResponsiveDrawer'
import { createMuiTheme } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';
//import BDZPageHeader from './Components/PageHeader/PageHeader'
import PageBody from './Components/PageBody/PageBody'
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from './Components/Posts/CookiesPost'
import GeneticsPost from './Components/Posts/GeneticsPost'
import GetinTouch from './Components/Posts/GetinTouch';
import AboutMe from './Components/Posts/AboutMe'
import PageFooter from './Components/Page-Footer/PageFooter'

import { Nav, Navbar, NavItem } from "react-bootstrap"


// or
//import { Drawer } from '@material-ui/core';




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



export default function App(props) {
  return (
    <Router>
    <div className="App">
    <Navbar className='Nav'  >
<h1 style={{ 
  margin: 1,
                top: 2,
                right: 0,
                left: 25,
                position: 'relative',
              
             
            }} ><Link to='/' >It Ain't EZ Bein' BDZ</Link></h1>
<div className='skeleton-photo'>
<NavItem style={{
                margin: 1,
                top:-28,
                right: 2000 ,
         
                left:0 ,
             position: 'relative'
             
            }}>


            </NavItem>
            <Link to='/' ><img src={require("./skeleton_praying.png")} class="img-thumbnail" alt='logo' width='100px' float='right'></img></Link>
</div>
<div className='social-media' >
<NavItem style={{
                margin: 1,
                top:-28,
                right: 0,
         
                left: 1050,
             position: 'relative'
             
            }}>
<Nav.Link href='https://github.com/multibdoyle/'><img src={require("./github_logo.png")} class="img-thumbnail" alt='logo' width='25px' float='right'></img></Nav.Link>
</NavItem>
<NavItem style={{
                margin: 1,
                top: -59.5,
                right: 0,
         
                left: 1080,
                position: 'relative',
            }}>
<Nav.Link href='https://www.linkedin.com/in/brendan-doyle-403ba028'><img src={require("./linkedin_logo.png")} class="img-thumbnail"alt='linkedinlogo' width='25px' float='right'></img></Nav.Link>
</NavItem>
<NavItem style={{
                margin: 1,
                top: -89.5    ,
                right: 0,
           
                left: 1108  ,
                position: 'relative',
            }}>
<Nav.Link href='https://www.instagram.com/multibdoyle/'><img src={require("./instagram_logo.png")} class="img-thumbnail" alt='instagramlogo' width='25px' float='right'></img></Nav.Link>
</NavItem>
</div>
 </Navbar >

  </div>
    <Switch>
<Route exact path="/" component={PageBody} />
<Route path="/cookies" component={CookiesPost} />
<Route path='/genetics' component={GeneticsPost} />
<Route path='/about-me' component={AboutMe} />
<Route path ='/get-in-touch' component={GetinTouch} />
</Switch>
<PageFooter></PageFooter>
</Router>
  );  
  }   
  
  //<header className='Header'>
 // <nav className='Nav'>
//<a ><Link to='/' style={{ textDecoration: 'none' , color: 'black'}}>BDZ In the City</Link></a>
//<a href='https://github.com/multibdoyle/'>GitHub Logo</a>
//<a href='https://github.com/multibdoyle/'>LinkedIn Logo</a>
//<a href='https://github.com/multibdoyle/'>Instagram Logo</a>
// </nav>
// </header>