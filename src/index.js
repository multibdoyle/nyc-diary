import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import PageBody from './Components/PageBody/PageBody'
import CookiesPost from './Components/Posts/CookiesPost'
import PageHeader from './Components/PageHeader/PageHeader'
import { createMuiTheme, ThemeProvider, withTheme  } from '@material-ui/core/styles';
//import './PageHeader.css'
import theme from './themes';
import GA from './GoogleAnalytics'

ReactDOM.render(  <ThemeProvider> <App> </App> </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA