import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from '../Posts/CookiesPost';
import PageBody from '../PageBody/PageBody'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PageBody}/>
      <Route path='/cookies' component={CookiesPost}/>
    </Switch>
  </main>
)

export default Main;