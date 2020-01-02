import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
import './CookiesPost.css'

class CookiesPost extends React.Component 
{ render() {
    return (
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
        <body>
        <img src='https://cdn.vox-cdn.com/thumbor/__Z9OzVuvdY3I9hBTj4rq53Ei8M=/0x41:2400x1444/1200x800/filters:focal(1008x7:1392x391)/cdn.vox-cdn.com/uploads/chorus_image/image/64738146/4698852374_5c96a1b968_o.0.jpg' alt='cookies' height='200' width='350' class='center'></img>
        </body>
      <h2>The completely biased but highly confident ranking of NYC chocolate chip cookies</h2>
      <p>I want to shed light on cookies that have made my life just a tad more radiant, if only for one wild moment.</p>
      <p>Yeah I eat cookies</p>
    </div>
  </div>
</div>)
}
}

export default CookiesPost;