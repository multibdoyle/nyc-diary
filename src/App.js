import React, {useEffect} from 'react';
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
import FactoryTamalePost from './Components/Posts/FactoryTamal'
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
import UncleSamsPizzaPost from './Components/Posts/UncleSamPizza'
import EggdaysPost from './Components/Posts/Eggdays'
import GobblerPost from './Components/Posts/Gobbler'
import HeroesandVillainsPost from './Components/Posts/HeroesandVillains'
import TheDivinePost from './Components/Posts/TheDivine'
import VanLeeuwenPost from './Components/Posts/VanLeeuwen'
import DoughnutProjectPost from './Components/Posts/DoughnutProject'
import TheDutchPost from './Components/Posts/TheDutch'
import RubirosaPost from './Components/Posts/Rubirosa'
import VesuvioPost from './Components/Posts/Vesuvio'
import HoleyCreamPost from './Components/Posts/HoleyCream'
import VillageSquarePost from './Components/Posts/VillageSquare'
import PopsEatRitePost from './Components/Posts/PopsEatRite'
import CronutPost from './Components/Posts/Cronut'
import {useDispatch} from 'react-redux';
import PasticceriaRoccoPost from './Components/Posts/PasticceriaRocco'
import ZazzysPost from './Components/Posts/Zazzys'
import SaucePost from './Components/Posts/Sauce'
import MikeysPost from './Components/Posts/Mikeys'
import PommesFritesPost from './Components/Posts/PommesFrites'
import AlidoroPost from './Components/Posts/Alidoro'
import ButterfunkPost from './Components/Posts/Butterfunk'
import LilFrankiesPost from './Components/Posts/LilFrankies'
import FioresPost from './Components/Posts/Fiores'
import HeadlessWidowPost from './Components/Posts/HeadlessWidow'
import BleeckerStreetPizzaPost from './Components/Posts/BleeckerStreetPizza'
import LABurdickPost from './Components/Posts/LABurdick'
import Create from './Components/CMS/Create'
//import ReadBlogPost from './Components/CMS/PostList'
import Home from './Components/CMS/HomePage'
import TestPosts from './Components/CMS/PostList_v2'
import SmashedPost from './Components/Posts/Smashed'
import SweetRehabPost from './Components/Posts/SweetRehab'
import BlackStarPost from './Components/Posts/BlackStarBakery'
import ArturosPost from './Components/Posts/Arturos'
import MollysPost from './Components/Posts/MollysCupcakes'
import DanandJohnsPost from './Components/Posts/DanandJohns'



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
<Route path ='/salute-uncle-sams-pizza' component={UncleSamsPizzaPost}/>
<Route path ='/eggs-on-my-burger' component={EggdaysPost}/>
<Route path ='/heroes-and-villains-in-essex-street-saves-the-day' component={HeroesandVillainsPost}/>
<Route path ='/eat-more-stuffing' component={GobblerPost}/>
<Route path ='/the-genius-of-two-boots-pizza' component={TheDivinePost}/>
<Route path ='/you-belong-with-me-van-leeuwen-oat-milk-ice-cream' component={VanLeeuwenPost}/>
<Route path ='/the-doughnut-project-and-the-bourbon-sticky-toffee-pudding-bun-plus-the-cereal-milk-crunch' component={DoughnutProjectPost}/>
<Route path ='/the-dutch-will-always-strive-and-prosper' component={TheDutchPost}/>
<Route path ='/rubirosa-pizza-delivered-a-very-merry-christmas' component={RubirosaPost}/>
<Route path ='/vodka-and-hot-honey-spices-up-village-square-pizza-in-the-east-village' component={VillageSquarePost}/>
<Route path ='/holey-cream-has-got-the-most-reliable-delivery-donut-ice-cream-sandwiches-in-new-york' component={HoleyCreamPost}/>
<Route path ='/vesuvio-bakery-serves-up-the-best-bombolini-in-downtown-manhattan' component={VesuvioPost}/>
<Route path ='/pops-burger-and-fries-has-got-me-hot-for-vegan-food' component={PopsEatRitePost}/>
<Route path ='/dominique-ansel-is-still-a-genius-and-the-cronut-is-still-the-best-pastry-in-the-world' component={CronutPost}/>
<Route path ='/pasticceria-rocco-cookies-and-cheesecake-are-a-deadly-combination' component={PasticceriaRoccoPost}/>
<Route path ='/zazzys-pizza-and-puppy-dogs-are-a-dangerous-mix' component={ZazzysPost}/>
<Route path ='/get-lost-in-the-sauce-on-rivington-street' component={SaucePost}/>

<Route path ='/mikey-likes-it-serves-waffle-ice-cream-sandwiches-with-love' component={MikeysPost}/>
<Route path ='/pommes-frites-french-fries-bring-belgium-flavor-to-greenwich-village' component={PommesFritesPost}/>
<Route path ='/alidoro-makes-the-most-savage-sandwiches-in-soho' component={AlidoroPost}/>
<Route path ='/butterfunk-biscuits-combines-southern-fried-charm-with-new-york-flavor' component={ButterfunkPost}/>
<Route path ='/factory-tamal-takes-tortas-and-tamales-to-the-max-in-east-village' component={FactoryTamalePost}/>
<Route path ='/lil-frankies-delivers-fast-fresh-neapolitan-pies-in-east-village' component={LilFrankiesPost}/>
<Route path ='/fiores-pizza-has-revamped-their-recipe-and-returned-with-some-of-the-best-pizza-in-the-village' component={FioresPost}/>
<Route path ='/i-lost-my-head-at-the-headless-widow-in-the-east-village' component={HeadlessWidowPost}/>
<Route path ='/bleecker-street-pizza-serves-up-prime-pizza-in-a-prime-location-in-west-village' component={BleeckerStreetPizzaPost}/>

<Route path ='/la-burdick-makes-one-of-the-best-cookies-in-the-city' component={LABurdickPost}/>
<Route path ='/create' component={Create}/>

<Route path ='/postlist' component={Home}/>
<Route path ='/new-post-what-it-do-baby' component={TestPosts}/>
<Route path ='/smashed-makes-the-best-burgers-i-have-had-all-year-in-les'component={SmashedPost}/>
<Route path ='/sweet-rehab-bakery-takes-dessert-to-new-heights-on-sullivan-street' component={SweetRehabPost}/>
<Route path ='/black-star-bakery-has-some-of-the-best-pastries-in-the-city' component={BlackStarPost}/>

<Route path ='/arturos-coal-oven-pizza-is-keeping-the-greenwich-village-charm' component={ArturosPost}/>
<Route path ='/mollys-cupcakes-takes-me-back-to-childhood-in-greenwich-village' component={MollysPost}/>
<Route path ='/dan-and-johns-wings-sauced-me-up-and-knocked-me-out' component={DanandJohnsPost}/>





</Switch>
<PageFooter></PageFooter>
</Router>

  );  
  }   
