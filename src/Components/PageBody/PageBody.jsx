import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from '../Posts/CookiesPost';
import Main from '../Routing/Routing'
import levain_cookies from '../../assets/levain_cookies.jpg'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './PageBody.css'


class PageBody extends React.Component 
{ render() {
    return (
    <div >
  <div classname='Pagebody' style={{position: 'relative', top: -75, left: 100}}>
<h1 align='center'></h1>

    <div>
    
     <a><Link to='/cookies'><h3 style={{fontFamily:'Archer', fontSize:25}}>The 14 Best Cookies Below 14th Street</h3></Link></a> 
      <body>
        <img id='cookie_photo'  src={require("../../levain_cookies_1.jpg")} class="img-thumbnail" alt='cookies' 
        style={{ width:'250px',position:'relative',  borderRadius:5,}}></img>
        </body>
      <a> <h4 style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/cookies'>What I talk about when I talk about cookies.</Link></h4></a>
    </div>
    <div style={{position: 'relative', top:25}}>
    <h3 style={{fontFamily:'Archer'}}>How Genetics Will Influence the Olympics</h3>
      <img src={require("../../Kipchoge.jpg")} class="img-thumbnail" alt='olympics' style={{
           
                width:'250px',
               position: 'relative',
               borderRadius:5 ,
               border:10, 
              borderColor: 'black'
            }}
           ></img>
      <li style={{fontFamily:'Archer',fontSize:18}}><Link to='/genetics'>Read more</Link></li>
      <Router>
      </Router>
</div>
</div>
</div>
)
}
}

export default PageBody;