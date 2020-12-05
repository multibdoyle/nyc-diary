import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import StickyToffee from '../../StickyToffee.jpeg'
import './DoughnutProject.css'


class DoughnutProjectPost extends React.Component 
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
    
     <img  src={StickyToffee}  alt='pint' class='pint' ></img>

     <h6 style={{fontSize:14}}> Saturday, December 5th, 2020</h6>
   <h2>The Doughnut Project taught me to love sticky toffee pudding...at least on doughnuts </h2>

   <p>The Doughnut Project is a long-time social media darling known for artisan flavors — you’re as likely to come here for their famous “Everything Donut” (sweet cream cheese glaze, sesame, poppy and pepita Seeds, garlic, sea Salt) as you are a classic glazed. Even during an unstable year for hospitality businesses, TDP has managed to crank out new donuts (Mexican Hot Chocolate! Blueberry Cobbler!) and new cocktail partnerships (The Mimosa Doughnut with Chandon, the Alabama Whiskey Salted Caramel Apple Pie Doughnut with Clyde May) that keep their <a href='https://www.instagram.com/thedoughnutproject/?hl=en' target='blank' style={{color:'blue', fontSize: 16}}>Instagram feed viral </a>and the people — locals and tourists alike — inspired for donuts. 
</p>
<p>Today, after enjoying a rare sit-down meal at <a href='https://www.instagram.com/flipsigi/?hl=en' style={{color:'blue',fontSize:16}}>Flip Sigi </a>(“That’s banana ketchup, there’s not actually bananas in there, and it’s fire with the Sinigang Fries”, admonished my server - he was right), I decided to take a stroll down to 10 Morton Street, just a stone’s throw from the Friends apartment, and see what TDP had on deck. 


</p>
<p>A short queue was formed outside, and several other people lined up after me in masked obedience. Clearly, I wasn’t the only one who knew what the time was, literally and figuratively — TDP closes at 2 p.m., if they don’t sell out before. 

 </p>
<p>	 Any fears I had about having to sift through a picked-over variety of plain and glazed doughnuts were quickly assuaged; as soon as I entered, my eyes landed upon a chubby, browned snail of a pastry, maybe 25% larger than any other in the display case. This, I immediately surmised, was that weekend’s advertised special, the Bourbon Sticky Toffee Pudding Bun. 
</p>

<p>I am neither a bourbon fan, nor a sticky toffee fan. In fact, looking at <a href='https://en.wikipedia.org/wiki/Sticky_toffee_pudding' style={{color:'blue',fontSize:16}}>the definition of sticky toffee </a>(‘an English dessert...made with finely chopped dates...’), it seems like a dish I might force myself to try while abroad, then never again. But the beauty of the roll, as well as the beguiling compound word ‘Pudding Bun,’ made the Sticky Toffee Pudding Bun an obvious pick-up. I also picked up a cornflake-topped Cereal Milk Crunch doughnut; the kind lady behind me in line held the door as I tottered out, balancing two plastic clam-cases and a shopping bag from a venture earlier that day. 

</p>
<p>It’s a hard-knock life; <a href='https://www.youtube.com/watch?v=TuELGO_-lEU' style={{color:'blue', fontSize:16}}>Jay-Z and I, we are the same. </a>

</p>
<p>The minds at the Doughnut Project, to be sure, know how to make beautiful food — uncasing the Sticky Toffee Pudding Bun at home, I could nearly see my reflection in the glaze. The dough was slightly firm, somewhere between the consistency of a donut and a cinnamon roll, and had the ideal amount of pull-apart breadiness for dipping into coffee. 

</p>
<p>Lucky for me, I was still sipping on a cup from <a href='https://www.yelp.com/biz/the-coppola-cafe-new-york' style={{color:'blue', fontSize:16}}>The Coppola Cafe</a>; in the bun went, baptised in my Americano and so being born again into a new, espresso-infused creation. With or without coffee, the donut was delightful - chewy-sweet dough, subtle glaze, and moving towards ever-increasing gooiness at the center. Being a maximalist, I inevitably went all-in on the abundant sticky toffee compote, attacking from the top-down. The slightly crunchy, caramel-y pudding added texture and contrast to the glazed bun itself, creating a sunken center of sticky dough-and-glaze which were the best final bites of the whole experience. 

</p>
<p>The Cereal Milk Crunch, if I’m being honest (and why wouldn’t I be honest? Why even propose such a thing?), was even better than the Pudding Bun. I’m already wise to the sophisticated pairing of cornflakes with dessert, thanks to Cristina Tosi’s Milk Bar creations, and this donut — made with Oatly oat milk — seriously tasted like a sweet bowl of frosted flakes and milk in pastry form. It was legendary — no coffee needed for dipping, although I may have doused a few bites in the dregs of my Americano. 

</p>
<p>Time and memories tend to meld together when you’re being a maximalist **Sigh, hand to forehead** I need a nap. I seriously appreciate The Doughnut Project for continuing their commitment to creativity, and delivering two fantastic and uniquely different pastries. I would give the  Sticky Toffee Pudding Bun a 4 out of 5, and the Cereal Milk Crunch a 5 (the first ever 5 on this blog). 

</p>
<p>So for a composite score - 4.5.  Math is fun. Make a math-themed doughnut, The Doughnut Project!

</p>
<p>Until next time. 
</p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default DoughnutProjectPost;