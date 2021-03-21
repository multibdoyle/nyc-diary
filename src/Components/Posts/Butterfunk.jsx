import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import BiscuitShortcake from '../../BiscuitShortcake.jpeg'
import BiscuitChoppedCheese from '../../BiscuitChoppedCheese.jpeg'
import './Butterfunk.css'


class ButterfunkPost extends React.Component 
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
    
     <img  src={BiscuitShortcake}  alt='biscuitshortcake' class='biscuitshortcakey' ></img>

     <h6 style={{fontSize:14}}> Sunday, March 21st, 2021</h6>
   <h2>I don't know if I'll ever trust shortcake on a menu again</h2>

<p>I have ordered from UberEats every single weekend for the past, hmmm, call it 64 weekends, and had never seen Butterfunk Biscuit Co. — never seen any biscuit-focused restaruant, actually - before yesterday. 
</p>
<p>
But I was familiar with Butterfunk's address: 30 Vandam Street. I ordered a ten-piece of Nashville Hot Wings from the same location — branded as Firebelly Wings — this past December. The wings were decent, as I recall.

 </p>
<p>	 Two ‘restaurants’ (at least) sharing the same kitchen? Methinks a <a href='https://www.multibdoyle.com/ghost-kitchens' target='blank' style={{color:'blue',fontsize:16}}>ghost kitchen</a> has taken root! 
</p>

<p>Butterfunk's menu was appealingly creative, like a New York deli owner just returned from his COVID retreat in South Carolina and wants to share his abundance of Southern-fried inspiration. The Smoked Salmon Biscuit and Avocado Toast Biscuit were among the top-billed menu items, right next to the Crispy Fried Chicken Biscuit.
  </p> 

    <p>
    After some deliberation, I went all in on the Chopped Cheese Biscuit. A chopped cheese, for those unaware, is the uptown New York City bodega order <i>du jour</i>*, akin to a bacon-egg-and-cheese in Midtown, or a juice cleanse and gallons of smart water in Tribeca. 
</p>
<p>I finished off my order with the "Berry Berry Good Shortcake" — can’t skip dessert! — and hopped on a Zoom catch-up with a friend while I waited. 

</p>
    
<p>When the food arrived, I plopped my bag of goodies on my bed with my laptop and pulled out the first item at the top of the bag, which turned out to be the shortcake. 

</p>
<p>Right away, I knew something was wrong. My berry-shortcake medley looked more like creme fraiche, croutons and yellow cherry tomatoes with a sprig of parsley. 

</p>

    
<p>My friend agreed the whole rigamarole seemed off as I held up the food to the camera. Audibly crunching into one of the ‘shortcake’ bites confirmed that this dessert was seriously janky. 

</p>
<p>Unsettled, I put the carton down and decided to wait until later to eat the rest. I didn’t want to cry on a Zoom call. 

</p>
<p>Twenty minutes later, when I got off the Zoom and dug into the Chopped Cheese Biscuit, my worst fears about Butterfunk were slightly quelled — this was a delicious, cheesy, beefy symphony. The onions provided crucial grease and crunch, and the biscuit, though a bit crunchy on the exterior, eventually softened into a pleasing bready mush. 
</p>
<p> <img  src={BiscuitChoppedCheese}  alt='chopcheesebiscuit' class='chopcheesebiscuit' ></img></p>


<p>After scooping up the last of the biscuit and beef, I tentatively tucked into the ‘shortcake’; this second go-round proved slightly more — ahem — fruitful. The yellow balls turned out to be fresh gooseberries, tart and juicy, and the sliced strawberries and blueberries were also perfectly ripe. Healthy dollops of whipped cream did just enough to moisten the bread bites into a palatable dessert.
</p>
<p>If I had read the menu carefully, of course, I would have noticed the shortcake description specifically called out ‘toasted biscuit’ as included in the mix. So, Butterfunk is only half-guilty of false advertising — they admit to not using real shortcake, but like, in the fine print. 

</p>

<p> I am usually hesitant to give out anything less than a stellar score on this blog, given the absolute maelstrom of a year we’ve had in New York City hospitality. The last thing the city needs is an entitled Manhattanite going full <a href=' https://pixar.fandom.com/wiki/Anton_Ego' target='blank' style={{color:'blue',fontsizse:16}}>Anton Ego</a> on reviewing their cheat meals.

</p>
<p>But because Butterfunk is a ghost kitchen — more comparable to an of-the-moment meme stock then a Berkshire Hathaway — I feel I should be a little more blunt with my assessment. And I’m going to split up the score:

</p>
<p>A 2.5 out of 5 for the "Berry Berry Good Shortcake [Biscuit?]." On a positive note, the fruit was fresh and the whipped cream was plentiful; I think Butterfunk concocted as good a toasted biscuit dessert as they possibly could. But ultimately, they used freakin’ toasted biscuits and called it shortcake. No bueno, man. 
</p>
<p>The Chopped Cheese Biscuit gets a 3.5 out of 5. The ground beef was hearty, the cheese was melty, the biscuit was, um, toasted. Maybe a little too toasted, which keeps the sandwich from a solid 4. Still, I’d absolutely order a biscuit sandwich from Butterfunk again. 
</p>
<p>So overall, a 3 out of 5 for Butterfunk Biscuit Co., whose motto seems to be ‘use biscuits in everything.’ Maybe not the worst motto. Just don’t serve me biscuits and call it shortcake, ‘mkay? 
</p>
<p>Until next time.</p>

<p style={{fontsize:8}}><i>*For more details on how to make a proper chop cheese — typically packed into a hero roll with ground beef, onions, melted cheese, tomatoes, lettuce and ketchup, fried to order on a bodega grill — please refer to Harlem rapper Jim Jones’ <a href='https://www.youtube.com/watch?v=GheOOc3fmTc' target='blank' style={{color:'blue',fontsize:16}}>five-minute lesson.</a></i>
</p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default ButterfunkPost;