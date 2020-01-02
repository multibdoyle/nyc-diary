import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from '../Posts/CookiesPost';
import Main from '../Routing/Routing'
import levain_cookies from '../../assets/levain_cookies.jpg'
class PageBody extends React.Component 
{ render() {
    return (
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Eat these homemade cookies...in New York...right now..</h2>
      <body>
        <img src='https://cdn.vox-cdn.com/thumbor/__Z9OzVuvdY3I9hBTj4rq53Ei8M=/0x41:2400x1444/1200x800/filters:focal(1008x7:1392x391)/cdn.vox-cdn.com/uploads/chorus_image/image/64738146/4698852374_5c96a1b968_o.0.jpg' alt='cookies' height='200' width='350' class='center'></img>
        </body>
      <h5>Please patron these spots with the best cookies</h5>
      <li><Link to='/cookies'>Read more</Link></li>
    </div>
  </div>
  <div class="card">
      <h2>The best genes we will see in the 2020 Olympics</h2>
      <h5>Do you have your alleles correct?</h5>
      <div class="fakeimg" >Image</div>
      <Router>
      <p>A link might go here</p>
      </Router>
    </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <div class="fakeimg" >Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
  </div>
</div>)
}
}

export default PageBody;