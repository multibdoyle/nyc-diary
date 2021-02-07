import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'

import { createMuiTheme, ThemeProvider, withTheme  } from '@material-ui/core/styles';
//import reducers from './reducers';
//import './PageHeader.css'
import theme from './themes';
import GA from './GoogleAnalytics'

//const store=createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
//Uncomment the applyMiddleware and the Provider functions from react redux when you want
//to start using middleware, for storing comments and such
//<Provider store={store}>
<App> </App> 
//</Provider>
, document.getElementById('root')


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA