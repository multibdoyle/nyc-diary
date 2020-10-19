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

  <div class='pageBody' style={{position: 'relative', top: -75, left: 100}}>
<h1 align='center'></h1>



<div>
    <a><Link to='/shoes-so-ugly-they-are-beautiful'><h3 style={{fontFamily:'Archer', fontSize:25}}>Dad Shoes Aint' Dead Yet </h3></Link></a> 
   <h5> Sunday, October 11th, 2020</h5>
    <body>
   
       <img class='migos' id='migos' src='https://i.pinimg.com/736x/17/ff/f4/17fff49484207924f2047e953572bdb8.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/shoes-so-ugly-they-are-beautiful'>I like Dad shoes and I cannot lie. </Link></div></a>
  </p> </div>



<div>
    <a><Link to='/tatted-on-my-choker'><h3 style={{fontFamily:'Archer', fontSize:25}}>I Had a Vision of the Cross .... On my Forearm</h3></Link></a> 
   <h5> Sunday, September 20th, 2020</h5>
    <body>
   
       <img class='peep' id='peep' src='https://images-na.ssl-images-amazon.com/images/I/51C43h9BCsL._AC_.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{contrast:'200%' }}></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/tatted-on-my-choker'>Lemme tell ya'all the story of my first tattoo. </Link></div></a>
  </p> </div>



<div>
    <a><Link to='/california-is-burning'><h3 style={{fontFamily:'Archer', fontSize:25}}>Bangin' out West, Slangin' out West....</h3></Link></a> 
   <h5> Monday, September 14th, 2020</h5>
    <body>
   
       <img class='california' id='california' src='https://storage.needpix.com/rsynced_images/california-bw.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{contrast:'200%' }}></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/california-is-burning'>East Coast vs. West Coast beef takes a break while wildfires rage. </Link></div></a>
  </p> </div>
<div>
    <a><Link to='/dopamine-and-social-media'><h3 style={{fontFamily:'Archer', fontSize:25}}>Quit Social Media; Take Control of Your Dopamine</h3></Link></a> 
   <h5> Saturday, September 5th, 2020</h5>
    <body>
   
       <img className='jdog' id='jaron' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jaron_lanier.JPG/1407px-Jaron_lanier.JPG' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{ position:'relative',  contrast:'200%' }}></img>
   
       </body>
   <p>  <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/dopamine-and-social-media'>Jaron Lanier is livin' his best life without social media. </Link></div></a>
  </p> </div>
    <div  >
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
   <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/the-bodybuilding-bakers-of-instagram'>Nobody knows how to cheat day like a fitness fanatic.</Link></div></a>
   </p>  </div>
<div>
    <a><Link to='/we-are-all-sapiens'><h3 style={{fontFamily:'Archer', fontSize:25}}>Things Read in Quarantine: "Sapiens" by Yuval Noah Harari</h3></Link></a> 
   <h5> Saturday, August 8th, 2020</h5>
    <body>
   
       <img className='thejoker' id='joker' src='https://live.staticflickr.com/1969/44765796314_e4db9593cf_b.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
     style={{ position:'relative', contrast:'200%' }}
     ></img>
   
       </body>
   <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/we-are-all-sapiens'>Wanna hear a joke? Humanity. Ha. Ha. Ha.</Link></div></a>
   </p></div>


<div>
    <a><Link to='/get-off-the-couch'><h3 style={{fontFamily:'Archer', fontSize:25}}>Someone Save Me From My Couch</h3></Link></a> 
   <h5> Thursday, July 30th, 2020</h5>
    <body>
   
       <img class='couch' id='couch' src='https://live.staticflickr.com/4632/24894378477_25af95c2b1_b.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{position:'relative',  contrast:'200%' }}></img>
   
       </body>
   <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/phase-4'>I'm getting way too comfortable on here.</Link></div></a>
   </p>  </div>



<div>
    <a><Link to='/phase-4'><h3 style={{fontFamily:'Archer', fontSize:25}}>Which 4? Phase 4!</h3></Link></a> 
   <h5> Saturday, July 18th, 2020</h5>
    <body>
      <filter id='phase'>
       <img className='chinatown' id='chinatown' src='https://live.staticflickr.com/5772/30023004952_7bfc77fbf6_b.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
       style={{ position:'relative',  contrast:'200%' }}></img>
       </filter>
       </body>
   <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/phase-4'>De Blasio just turned up the mercury on this hot boy's summer.</Link></div></a>
 </p>  </div>

    <div>
 <a><Link to='/ghost-kitchens'><h3 style={{fontFamily:'Archer', fontSize:25}}>Enter the Ghost Kitchens</h3></Link></a> 
   <h5> Saturday, July 4th, 2020</h5>
    <body>
      <filter id='ghosts'>
       <img className='swedishChef' id='swedish-chef' src='https://live.staticflickr.com/84/235702343_2d7c71a86f_b.jpg' 
//class="img-thumbnail" alt='intro' 
/* eslint no-restricted-globals:0 */
      alt='chef' style={{position:'relative', contrast:'200%' }}></img>
       </filter>
       </body>
  <p>  <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/ghost-kitchens'>Wherein I explore the otherwordly realm of virtual restaurants.</Link></div></a>
 </p>  </div>

     <a><Link to='/intro'><h3 style={{fontFamily:'Archer', fontSize:25}}>Why Am I Here?</h3></Link></a> 
    <h5> Sunday, June 14th, 2020</h5>
     <body>
        <img className='oculus' id='oculus' src='https://c0.wallpaperflare.com/preview/727/197/160/fidi-oculus-world-trade-center-mall-thumbnail.jpg' 
 
        style={{ position:'relative'}}></img>
        </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/intro'>It's a new dawn, it's a new day, it's a new light.</Link></div></a>
</p>    </div>


    <div>
    
   
      <Router>
      </Router>

</div>
</div>


)
}
}

export default PageBody;