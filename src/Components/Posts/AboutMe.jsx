import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
//import levain_cookies from '../../levain_cookies_2.png'
import './CookiesPost.css'

class AboutMe extends React.Component 
{ render() {
    return (
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
        <body>
        <img src='https://cdn.vox-cdn.com/thumbor/__Z9OzVuvdY3I9hBTj4rq53Ei8M=/0x41:2400x1444/1200x800/filters:focal(1008x7:1392x391)/cdn.vox-cdn.com/uploads/chorus_image/image/64738146/4698852374_5c96a1b968_o.0.jpg' alt='cookies' height='200' width='350' class='center'></img>
        </body>
      <h2>Who am I...</h2>
      <p>I live in New York City, I like to write and I tend to get excited about future-state technology despite not fully understanding present-state technology. But we're all learning, right? </p>
      <p> Love Jesus, get at me if you're into that knowutiamsaying. And even if you're not...get at me.</p>
    

      </div>
  </div>
</div>)
}
}

export default AboutMe;
