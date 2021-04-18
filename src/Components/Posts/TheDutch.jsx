import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import TheDutchBurger from '../../TheDutchBurger.jpeg'
import TheDutchCornbread from '../../TheDutchCornbread.jpeg'
import TheDutchCake from '../../TheDutchCake.jpeg'
import TheDutchApplePie from '../../TheDutchApplePie.jpeg'
import './TheDutch.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'

class TheDutchPost extends React.Component 
{ render() {
    return (
<ScrollIntoView>

        <div style={{
            // margin: 1,
            position: 'relative',
             top: -75,
             paddingRight: 25,
             paddingLeft: 25,
         }}>
     <body >
    
     <img  src={TheDutchBurger}  alt='dutchburger' class='dutchburger' ></img>

     <h6 style={{fontSize:14}}> Sunday, December 21st, 2020</h6>
   <h2>I was not worthy of that cornbread. Or that burger. Or that cake I stole from my friend...</h2>

   <p><a href='https://www.thedutchnyc.com/' target='blank' style={{color:'blue',fontSize:16}}>The Dutch </a>is a beautiful restaurant with beautiful food and — frankly — usually beautiful clientele. Even with the impossibly limiting restrictions on NYC dining in 2020, Andrew Carmellini’s bistro at the corner of Sullivan and Prince has remained a bustling Soho hotspot for those who are <a href="https://www.businessoffashion.com/community/people/a-ap-rocky#:~:text=The%20music%20coalition%20to%20which,all%20the%20members'%20stage%20names." target='blank' style={{color:'blue', fontSize:16}}>always striving and prospering.</a>

</p>
<p>Given so much of my year was spent barely maintaining my hold on reality rather than concertedly crushing it, I was struck with a wee bit of imposter syndrome when deciding whether to dine at The Dutch last weekend. The Dutch is not where one goes to celebrate ‘maintaining.’ 


</p>
<p>
But I had a friend I wanted to treat to dinner. I live nearby. I was really hungry. And I had a gift card. 

 </p>
<p>	 Whether or not I had earned it, all the hands of destiny were pointing to a meal at The Dutch. 

</p>

<p>After being seated near the heat lamps on the cozy outdoor terrace, my friend and I started off with the Housemade Scallion-Chipootle Cornbread. The hot-cake came served with a cumulus of whipped butter. 
  </p> 
  <img  src={TheDutchCornbread}  alt='dutchcornbread' class='dutchcornbread' ></img> 
    
    <p>
    The sweet, moist, slightly spicy cornbread put me on the verge of feeling like I was starting off with dessert, in the best way; it ain’t always bad to fill up on bread. I probably ate 70% of the deep-dish cornbread before deciding to save some room for the main dish and also, you know, save some for my friend. 

</p>
<p>For my main, I ordered a Grass-Fed Double Cheddar Burger, which came sandwiched between a poppyseed bun and redolent with secret sauce - undoubtedly a nod to the Big Mac. The fries, too, were McDonalds-esque slim vessels of oily deliciousness. 

</p>
    
<p>The burger overall was one of the top three I’ve had all year — the uber-melty cheese and tangy pickle chips enhanced the flavor of the quality meat, and of course, secret sauce can elevate any double-cheeseburger to an 11. 

</p>
<p>For dessert, I ordered Apple Pie and Cinnamon Ice Cream. 

</p>
<img  src={TheDutchApplePie}  alt='dutchapplepie' class='dutchapplepie' ></img> 
    
<p>First of all, apple pie and cinnamon ice cream — that is just an inspired combination. The pie was very cold, like it had just come out of an icebox; in my opinion, it would’ve benefited from being warmed up, but cold apple pie holds its own intricacies of enjoyment. The whole thing was loaded with apples and tasted super-fresh. 
</p>
<p>In between bites of pie and ice cream, I dug into my friend’s Salted Caramel Chocolate Cake with Rice Crispies; this was a brilliant dessert, thick and decadent and RICH, with the rice crispies providing an enjoyable crunch to the pure fudgy-decadence of the cake. 

</p>
<img  src={TheDutchCake}  alt='dutchcake' class='dutchcake' ></img> 
<p>Eating two desserts took its expected toll on my vivality, and by the end of the meal I was feeling like a couch and a movie were all I was good for. After settling the bill, my friend and I walked a bit through Soho before I retreated back to my apartment, enjoying the remainder of my evening in a mostly mindless stupor. 
</p>
<p>I would give The Dutch a 5 out of 5 on the experience alone — the service and ambiance were all lovely and inviting, and whoever picks the hip-hop and low-fi pop playlist pumping throughout the venue has a special talent for vibe-setting. 

</p>
<p>The food as well was bomb bomb bomb, a 4.5 out of 5. The burger, especially, was very memorable — literally a Big Mac as envisioned by a Michelin-starred chef. 
</p>

<p> All you New York City denizens holing up here for Christmas, get thee to The Dutch this season — they’re serving Christmas Feasts available for pick-up. Unlike myself in the midst of this pandemic, The Dutch has pushed past the temptation to ‘maintain’, and has continued to strive and prosper.
</p>
<p> Long live The Dutch. Long live NYC dining. 
</p>
<p>Until next time.</p>
   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default TheDutchPost;