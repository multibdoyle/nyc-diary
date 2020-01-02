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
import PageHeader from './Components/PageHeader/PageHeader'
import PageBody from './Components/PageBody/PageBody'
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from './Components/Posts/CookiesPost'
import GeneticsPost from './Components/Posts/GeneticsPost'
import SearchBar from './Components/SearchBar/SearchBar'
import MenuAppBar from './Components/AppBar/MenuAppBar'
import NavBar from './Components/NavBar/NavBar'
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './Components/AppBar/AppBar'
import Drawer from '@material-ui/core/Drawer';
// or
//import { Drawer } from '@material-ui/core';

const AppBarIcon= () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);


export default function App(props) {
  console.log('hello')
  return (
    <Router>
        <div class="column">
      <div class="row">
    <div className="App">
      <header className='App-header'>
       <PageHeader></PageHeader>
       </header>
    </div>
    </div> </div> <div class="navbar">
<h1>Important Links I Care Deeply About</h1>
<ul>
  <div>The Journey Church</div>
  <div>My Instagram</div>
</ul>
</div>
    <Switch>
<Route exact path="/" component={PageBody} />
<Route path="/cookies" component={CookiesPost} />
<Route path='/genetics' component={GeneticsPost} />
</Switch>
</Router>
  );
  }