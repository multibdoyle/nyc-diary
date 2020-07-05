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
    <a><Link to='/ghost-kitchens'><h3 style={{fontFamily:'Archer', fontSize:25}}>Enter the Ghost Kitchens</h3></Link></a> 
   <h5> Saturday, July 4th, 2020</h5>
    <body>
      <filter id='ghosts'>
       <img class='img-responsive' id='swedish-chef' src='https://live.staticflickr.com/84/235702343_2d7c71a86f_b.jpg' 
class="img-thumbnail" alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{ width:'17%',height: '17%', position:'relative',  borderRadius:5,contrast:'200%' }}></img>
       </filter>
       </body>
     <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/ghost-kitchens'>Wherein I explore the otherwordly realm of virtual restaurants.</Link></div></a>
   </div>

     <a><Link to='/intro'><h3 style={{fontFamily:'Archer', fontSize:25}}>Why Am I Here?</h3></Link></a> 
    <h5> Sunday, June 14th, 2020</h5>
     <body>
        <img class='img-responsive' id='cookie_photo' src='https://c0.wallpaperflare.com/preview/727/197/160/fidi-oculus-world-trade-center-mall-thumbnail.jpg' 
 class="img-thumbnail" alt='intro' 
        style={{ width:'300px',position:'relative',  borderRadius:5,}}></img>
        </body>
      <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/intro'>It's a new dawn, it's a new day, it's a new light.</Link></div></a>
    </div>


    <div>
    
   
      <Router>
      </Router>

</div>
</div>
)
}
}

export default PageBody;