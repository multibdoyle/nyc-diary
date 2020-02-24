import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
//import './CookiesPost.css'

class GetinTouch extends React.Component 
 { render() {
    return (
        <div class="row">
        <div class="leftcolumn">
          <div class="card">
              <body>
                  <h1> Want to talk?</h1>
                  <div> You can email me at bdoyle.core@gmail.com. </div>
                  <div>Or checkout my <a href='https://github.com/multibdoyle'>GitHub</a> </div>
                  <div>Or connect with me on <a href='https://www.linkedin.com/in/brendan-doyle-403ba028/'> LinkedIn</a></div>
                  <div> Or follow my erstwhile, infrequently-updated but riveting adventures on the <a href='https://www.instagram.com/multibdoyle/'>'Gram!</a></div>
                  </body>
                  </div>
                  </div>
                  </div>
    )
 }
}
                

 export default GetinTouch; 