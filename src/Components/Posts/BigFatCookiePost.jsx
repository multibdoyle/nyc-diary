import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
import './BigFatCookiePost.css'

class BigFatCookiePost extends React.Component 
{ render() {
    return (

    <div style={{
               // margin: 1,
               position: 'relative',
                top: -75,
                paddingRight: 25,
                paddingLeft: 25,
            }}>
        <body >
       
        <img style={{borderRadius:12}} src='https://cdn.vox-cdn.com/thumbor/__Z9OzVuvdY3I9hBTj4rq53Ei8M=/0x41:2400x1444/1200x800/filters:focal(1008x7:1392x391)/cdn.vox-cdn.com/uploads/chorus_image/image/64738146/4698852374_5c96a1b968_o.0.jpg' alt='cookies' height='200' width='350' class='center'></img>
   
      <h2>Hottest Side-Hustle of 2020: Baking Huge Stuffed Cookies</h2>
      <p>I have been blessed enough to try cookies at some places which have not gotten love from blogs - or Yelp - or any other best of lists I have seen but are original and baked-in-house and will blow the socks off every other cookie. </p>
      <p>Without further ado - the cookie ‘adoos!</p>
      </body>
</div>

)
}
}

export default BigFatCookiePost;