import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from '../Posts/CookiesPost';
import Main from '../Routing/Routing'
import levain_cookies from '../../assets/levain_cookies.jpg'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './PageBody.css'
//import MediaQuery from 'react-responsive'

import InstagramEmbed from 'react-instagram-embed'
//import {Mobile, Desktop,Tablet} from '../BreakpointProvider/MediaBreakpoints'

class PageBody extends React.Component 
{ render() {
    return (

    <div  >
  <div class='pageBody' style={{position: 'relative', top: -75, left: 100}}>
<h1 align='center'></h1>

<div>
    <a><Link to='/the-bodybuilding-bakers-of-instagram'><h3 style={{fontFamily:'Archer', fontSize:25}}>I Eat Cookies for Love, Not Likes</h3></Link></a> 
   <h5> Saturday, August 22nd, 2020</h5>
    <body>
    <div       > 
 <InstagramEmbed
  url='https://www.instagram.com/p/CEHhdVEHExU/'
  maxWidth={320}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}

   ></InstagramEmbed>
</div>
       </body>
     <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/the-bodybuilding-bakers-of-instagram'>Nobody knows how to cheat day like a fitness fanatic.</Link></div></a>
   </div>
<div>
    <a><Link to='/we-are-all-sapiens'><h3 style={{fontFamily:'Archer', fontSize:25}}>Things Read in Quarantine: "Sapiens" by Yuval Noah Harari</h3></Link></a> 
   <h5> Saturday, August 8th, 2020</h5>
    <body>
   
       <img class='img-fluid' id='joker' src='https://live.staticflickr.com/1969/44765796314_e4db9593cf_b.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{width:'30%',height: '30%', position:'relative',  borderRadius:5,contrast:'200%' }}></img>
   
       </body>
     <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/we-are-all-sapiens'>Wanna hear a joke? Humanity. Ha. Ha. Ha.</Link></div></a>
   </div>


<div>
    <a><Link to='/get-off-the-couch'><h3 style={{fontFamily:'Archer', fontSize:25}}>Someone Save Me From My Couch</h3></Link></a> 
   <h5> Thursday, July 30th, 2020</h5>
    <body>
      <filter id='phase'>
       <img class='img-fluid' id='chinatown' src='https://live.staticflickr.com/4632/24894378477_25af95c2b1_b.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{width:'30%',height: '30%', position:'relative',  borderRadius:5,contrast:'200%' }}></img>
       </filter>
       </body>
     <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/phase-4'>I'm getting way too comfortable on here.</Link></div></a>
   </div>



<div>
    <a><Link to='/phase-4'><h3 style={{fontFamily:'Archer', fontSize:25}}>Which 4? Phase 4!</h3></Link></a> 
   <h5> Saturday, July 18th, 2020</h5>
    <body>
      <filter id='phase'>
       <img class='img-fluid' id='chinatown' src='https://live.staticflickr.com/5772/30023004952_7bfc77fbf6_b.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{width:'30%',height: '30%', position:'relative',  borderRadius:5,contrast:'200%' }}></img>
       </filter>
       </body>
     <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/phase-4'>De Blasio just turned up the mercury on this hot boy's summer.</Link></div></a>
   </div>

    <div>
    <a><Link to='/ghost-kitchens'><h3 style={{fontFamily:'Archer', fontSize:25}}>Enter the Ghost Kitchens</h3></Link></a> 
   <h5> Saturday, July 4th, 2020</h5>
    <body>
      <filter id='ghosts'>
       <img class='img-fluid' id='swedish-chef' src='https://live.staticflickr.com/84/235702343_2d7c71a86f_b.jpg' 
//class="img-thumbnail" alt='intro' 
/* eslint no-restricted-globals:0 */
      alt='chef' style={{width:'20%',height: '20%', position:'relative',  borderRadius:5,contrast:'200%' }}></img>
       </filter>
       </body>
     <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-25}}><Link to='/ghost-kitchens'>Wherein I explore the otherwordly realm of virtual restaurants.</Link></div></a>
   </div>

     <a><Link to='/intro'><h3 style={{fontFamily:'Archer', fontSize:25}}>Why Am I Here?</h3></Link></a> 
    <h5> Sunday, June 14th, 2020</h5>
     <body>
        <img class='img-fluid' id='cookie_photo' src='https://c0.wallpaperflare.com/preview/727/197/160/fidi-oculus-world-trade-center-mall-thumbnail.jpg' 
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