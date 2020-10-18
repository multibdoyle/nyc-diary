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
import GeneticsPost from './Components/Posts/GeneticsPost'
import GhostKitchensPost from './Components/Posts/GhostKitchens'
import GetinTouch from './Components/Posts/GetinTouch';
import AboutMe from './Components/Posts/AboutMe'
import PageFooter from './Components/Page-Footer/PageFooter'
import IntroPost from './Components/Posts/IntroPost'
import ScrollIntoView from './Components/ScrollIntoView/ScrollIntoView'
import { Nav, Navbar, NavItem } from "react-bootstrap"
import ReactGA from 'react-ga';
import GA from './GoogleAnalytics'
import Phase4Post from './Components/Posts/Phase_4';
import MyCouchPost from './Components/Posts/MyCouchPost'
import Sapiens from './Components/Posts/Sapiens'
//import {BreakpointProvider} from './Components/BreakpointProvider/BreakpointProvider'
import BodybuildingCookies from './Components/Posts/BodybuildingCookies'
import DopamineHigh from './Components/Posts/DopamineHigh'
import CaliforniaPost from './Components/Posts/California'
import Tattoos from './Components/Posts/Tattoos'
import DadShoesPost  from './Components/Posts/DadShoes'
import BestWingersPost from './Components/Posts/BestWingers'

import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from "responsive-react";



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
    //next two lines should give me mobile version of app

    <Router   >
       { GA.init() && <GA.RouteTracker /> }
    <div class="App">
    <Navbar classname='header' style={{position: 'relative', top: -30}}>
            <NavItem classname='title' >  <Link to='/' ><h1 style={{position: 'relative', top: 10,fontSize:35, fontFamily: 'Didot'}} align='center'
>A New York City Diary</h1> </Link>
            </NavItem>
           
            </Navbar>
            <Navbar>
            <div classname='skeleton-photo' align='center'  >
            <Link to='/' ><img  style={{
                position: 'relative',
              top: -70    , 
                    padding:25
            }}
            src={require("./skeleton_praying.png")} class="img-thumbnail" alt='logo' width='45 px'
             float='right' ></img></Link>

</div>
 </Navbar>

  </div>
    <Switch>
<Route exact path="/" component={PageBody} />
<Route exact path="/index.html" component={PageBody} />
<Route path='/genetics' component={GeneticsPost} />
<Route path="/intro" component={IntroPost} />
<Route path='/ghost-kitchens' component={GhostKitchensPost} />
<Route path='/phase-4' component={Phase4Post} />
<Route path ='/get-off-the-couch' component={MyCouchPost} />
<Route path ='/we-are-all-sapiens' component={Sapiens} />
<Route path ='/dopamine-and-social-media' component={DopamineHigh} />
<Route path='/about-me' component={AboutMe} />
<Route path ='/get-in-touch' component={GetinTouch} />
<Route path ='/the-bodybuilding-bakers-of-instagram' component={BodybuildingCookies} />
<Route path ='/california-is-burning' component={CaliforniaPost} />
<Route path ='/tatted-on-my-choker' component={Tattoos}/>
<Route path ='/shoes-so-ugly-they-are-beautiful' component={DadShoesPost}/>
<Route path ='/i-am-looking-for-the-best-wings' component={BestWingersPost}/>
</Switch>
<PageFooter></PageFooter>
</Router>

  );  
  }   
