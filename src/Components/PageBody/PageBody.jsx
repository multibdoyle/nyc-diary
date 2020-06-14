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
    
     <a><Link to='/intro'><h3 style={{fontFamily:'Archer', fontSize:25}}>Why Am I Here?</h3></Link></a> 
    <h5> Sunday, June 14th, 2020</h5>
     <body>
        <img id='cookie_photo' src='https://c0.wallpaperflare.com/preview/727/197/160/fidi-oculus-world-trade-center-mall-thumbnail.jpg' 
 class="img-thumbnail" alt='intro' 
        style={{ width:'300px',position:'relative',  borderRadius:5,}}></img>
        </body>
      <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/intro'>It's a new dawn, it's a new day, it's a new light.</Link></div></a>
    </div>

      <Router>
      </Router>

</div>
</div>
)
}
}

export default PageBody;