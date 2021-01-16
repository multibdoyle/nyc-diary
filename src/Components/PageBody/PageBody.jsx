import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import CookiesPost from '../Posts/CookiesPost';
import Main from '../Routing/Routing'
import levain_cookies from '../../assets/levain_cookies.jpg'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './PageBody.css'
import UncleSamsPizza from '../../UncleSamsPizza.gif'
//import MediaQuery from 'react-responsive'
import TheDutchBurger from '../../TheDutchBurger.jpeg'
import VesuvioBakery from '../../VesuvioBakery.jpeg'
import InstagramEmbed from 'react-instagram-embed'
import EggdaysPost from '../Posts/Eggdays';
import SmashEgg from '../../SmashEgg.jpg'
import Heroes_and_Villains1 from '../../Heroes_and_Villains1.jpeg'
import Gobbler from '../../Gobbler.jpeg'
import TwoBootsPizza from '../../TwoBootsPizza.jpeg'
import VanLeeuwenPint from '../../VanLeeuwenPint.jpeg'
import StickyToffee from '../../StickyToffee.jpeg'
import RubirosaPizza from '../../RubirosaPizza.jpeg'
import HoleyCream from '../../HoleyCream.jpeg'
import VillageSquarePizza from '../../VillageSquarePizza.jpeg'


//import {Mobile, Desktop,Tablet} from '../BreakpointProvider/MediaBreakpoints'

class PageBody extends React.Component 
{ render() {
    return (

  <div class='pageBody' style={{position: 'relative', top: -75, left: 100}}>



<Route path ='/vodka-and-hot-honey-spices-up-village-square-pizza-in-the-east-village' component={VillageSquarePizza}/>
<h1 align='center'></h1>



<div>
    <a><Link to='/vodka-and-hot-honey-spices-up-village-square-pizza-in-the-east-village'><h3 style={{fontFamily:'Archer', fontSize:25}}>Village Square Pizza Dishes Out Incredible 'Pandemic-Proof' Sicilian Slices in the East Village</h3></Link></a> 
   <h5> Saturday, January 16th, 2021</h5>
    <body>
   
       <img class='villagesquare' id='villagesquare'  src={VillageSquarePizza} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/vodka-and-hot-honey-spices-up-village-square-pizza-in-the-east-village'> I'm punching back at Dave Portnoy and One Bite Pizza Reviews, Village Square Pizza deserves their high-8 score. </Link></div></a>
  </p> </div>


<div></div>






<div>
    <a><Link to='/holey-cream-has-got-the-most-reliable-delivery-donut-ice-cream-sandwiches-in-new-york'><h3 style={{fontFamily:'Archer', fontSize:25}}>Holey Cream Serves My Basest Late-Night Munchie Desires</h3></Link></a> 
   <h5> Sunday, January 9th, 2021</h5>
    <body>
   
       <img class='holeycreamdonuts' id='holeycreamz' src={HoleyCream} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/holey-cream-has-got-the-most-reliable-delivery-donut-ice-cream-sandwiches-in-new-york'> I'm a sucker for blonde hair, blue eyes, and donut ice cream sandwiches. </Link></div></a>
  </p> </div>


<div></div>






<div>
    <a><Link to='/vesuvio-bakery-serves-up-the-best-bombolini-in-downtown-manhattan'><h3 style={{fontFamily:'Archer', fontSize:25}}>Vesuvio Bakery is the Boss of Bombolini's</h3></Link></a> 
   <h5> Sunday, January 3rd, 2021</h5>
    <body>
   
       <img class='vesuviobakery' id='vesuviobakery' src={VesuvioBakery} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/rubirosa-pizza-delivered-a-very-merry-christmas'> Wipe those 2020 tears and have a bombolini, it's a new year. </Link></div></a>
  </p> </div>


<div></div>












<div>
    <a><Link to='/rubirosa-pizza-delivered-a-very-merry-christmas'><h3 style={{fontFamily:'Archer', fontSize:25}}>Rubirosa Pizza Made Christmas Merry & Bright</h3></Link></a> 
   <h5> Saturday, December 26th, 2020</h5>
    <body>
   
       <img class='honeypie' id='honeypie' src={RubirosaPizza} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/rubirosa-pizza-delivered-a-very-merry-christmas'> COVID dampened the Christmas spirits, but it couldn't dampen the Christmas pizza.... </Link></div></a>
  </p> </div>


<div></div>


<div>
    <a><Link to='/the-dutch-will-always-strive-and-prosper'><h3 style={{fontFamily:'Archer', fontSize:25}}>Dinner at The Dutch Made Up for Everything Bad in 2020</h3></Link></a> 
   <h5> Sunday, December 21st, 2020</h5>
    <body>
   
       <img class='dutchcheeseburger' id='dutchcheeseburger' src={TheDutchBurger} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/the-dutch-will-always-strive-and-prosper'>Warm, cozy, and crazy-delicious American bistro-fare in the heart of Soho.  </Link></div></a>
  </p> </div>


<div>
    <a><Link to='/the-doughnut-project-and-the-bourbon-sticky-toffee-pudding-bun-plus-the-cereal-milk-crunch'><h3 style={{fontFamily:'Archer', fontSize:25}}> The Doughnut Project is a Fount of Inspiration in the West Village</h3></Link></a> 
   <h5> Saturday, December 4th, 2020</h5>
    <body>
   
       <img class='stickytoffee' id='stickytoffee' src={StickyToffee} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/the-doughnut-project-and-the-bourbon-sticky-toffee-pudding-bun-plus-the-cereal-milk-crunch'>Life is like a weekend menu at The Doughnut Project, ya never know what you're gonna get... </Link></div></a>
  </p> </div>







<div>
    <a><Link to='/you-belong-with-me-van-leeuwen-oat-milk-ice-cream'><h3 style={{fontFamily:'Archer', fontSize:25}}> I Started Cheating on Regular Ice Cream with Oat Milk Ice Cream</h3></Link></a> 
   <h5> Saturday, November 28th, 2020</h5>
    <body>
   
       <img class='oatmilkbrownsugar' id='oatmilkbrownsugar' src={VanLeeuwenPint} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/you-belong-with-me-van-leeuwen-oat-milk-ice-cream'>Oat milk? More like G.O.A.T. milk, nawmsaying.... </Link></div></a>
  </p> </div>









<div>
    <a><Link to='/the-genius-of-two-boots-pizza'><h3 style={{fontFamily:'Archer', fontSize:25}}> Two Boots, Many Opposing Ideas, One FANTASTIC Pizza</h3></Link></a> 
   <h5> Saturday, November 21st, 2020</h5>
    <body>
   
       <img class='twobootspizza' id='twobootspizza' src={TwoBootsPizza} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/the-genius-of-two-boots-pizza'>The pizza-slingers at Two Boots pass F. Scott Fitzgerald's test for first-rate minds. </Link></div></a>
  </p> </div>





<div>
    <a><Link to='/eat-more-stuffing'><h3 style={{fontFamily:'Archer', fontSize:25}}> 'Tis the Season for Holiday Sandwiches</h3></Link></a> 
   <h5> Saturday, November 14th, 2020</h5>
    <body>
   
       <img class='gobblersandwich' id='gobblersandwich' src={Gobbler} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/eat-more-stuffing'>Wherein I eat delicious gobbledy-gook from Blue Ribbon Fried Chicken. </Link></div></a>
  </p> </div>










<div>
    <a><Link to='/heroes-and-villains-in-essex-street-saves-the-day'><h3 style={{fontFamily:'Archer', fontSize:25}}> Need a Hero? Go Find Lil Susie on Essex Street</h3></Link></a> 
   <h5> Saturday November 7th, 2020</h5>
    <body>
   
       <img class='lilsusieburger' id='lilsusieburger' src={Heroes_and_Villains1} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/heroes-and-villains-in-essex-street-saves-the-day'>It was a day for new heros, so I got a double cheeseburger.  </Link></div></a>
  </p> </div>






<div>
    <a><Link to='/eggs-on-my-burger'><h3 style={{fontFamily:'Archer', fontSize:25}}>I Want More Eggdays and Less Weekdays</h3></Link></a> 
   <h5> Saturday, October 31st, 2020</h5>
    <body>
   
       <img class='eggburger' id='eggburger' src={SmashEgg} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/eggs-on-my-burger'>Wherein Eggdays pops up in the East Village and into my heart.  </Link></div></a>
  </p> </div>







<div>
    <a><Link to='/salute-uncle-sams-pizza'><h3 style={{fontFamily:'Archer', fontSize:25}}> The Audacity of Uncle Sam's Pizza on Clinton Street</h3></Link></a> 
   <h5> Saturday, October 24th, 2020</h5>
    <body>
   
       <img class='unclesampizza' id='unclesampizza' src={UncleSamsPizza} 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/salute-uncle-sams-pizza'>I donno if they're actually patriotic, but they make great pizza. </Link></div></a>
  </p> </div>



<div>
    <a><Link to='/i-am-looking-for-the-best-wings'><h3 style={{fontFamily:'Archer', fontSize:25}}> I Thought These Chicken Wings Would Get Me Out of My Rut</h3></Link></a> 
   <h5> Saturday, October 18th, 2020</h5>
    <body>
   
       <img class='flanders' id='flanders' src='https://i.pinimg.com/originals/f3/63/48/f363480a83ab0bb605e90d1d9f9e8beb.jpg' 
 alt='intro' 
/* eslint no-restricted-globals:0 */
      ></img>
   
       </body>
    <p> <a> <div style={{fontFamily:'Archer',fontSize: 25, position:'relative',top:-10}}><Link to='/i-am-looking-for-the-best-wings'>Wherein I review Best Wingers on Delancey Street.</Link></div></a>
  </p> </div>

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