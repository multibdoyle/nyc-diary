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
import { createMuiTheme } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';
//import BDZPageHeader from './Components/PageHeader/PageHeader'
import PageBody from './Components/PageBody/PageBody'
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from './Components/Posts/CookiesPost'
import BigFatCookiePost from './Components/Posts/BigFatCookiePost'
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
    <Navbar classname='header' style={{position: 'relative', top: -30}}>
            <NavItem classname='title' >  <Link to='/' ><h1 style={{position: 'relative', top: 20,fontSize:35, fontFamily: 'Didot'}} align='center'
>A New York City Diary</h1> </Link>
            </NavItem>
            <NavItem className='social-media'  style={{
                position: 'relative',
               left:1000, top:-45,       
            }}>
<Nav.Link href='https://github.com/multibdoyle/'><img src={require("./github_logo.png")} class="img-thumbnail" alt='logo' width='25px' float='right' style={{
                position: 'relative',
               left:-10,       
            }}></img></Nav.Link>
<Nav.Link href='https://www.linkedin.com/in/brendan-doyle-403ba028' ><img src={require("./linkedin_logo.png")} class="img-thumbnail"alt='linkedinlogo' width='25px' float='right' style={{
                position: 'relative',
               left:-4,  
               top:-2     
            }}></img></Nav.Link>
</NavItem>
            </Navbar>
            <Navbar>
            <div classname='skeleton-photo' align='center'  >
            <Link to='/' ><img  style={{
                position: 'relative',
              top: -75    , 
                padding:10    
            }}
            src={require("./skeleton_praying.png")} class="img-thumbnail" alt='logo' width='45 px' float='right' ></img></Link>

</div>
 </Navbar>

  </div>
    <Switch>
<Route exact path="/" component={PageBody} />
<Route exact path="/index.html" component={PageBody} />
<Route path="/cookies" component={BigFatCookiePost} />
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