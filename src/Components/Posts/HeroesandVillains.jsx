import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import Heroes_and_Villains1 from '../../Heroes_and_Villains1.jpeg'
import './HeroesandVillains.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'

class HeroesandVillainsPost extends React.Component 
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
    
     <img  src={Heroes_and_Villains1}  alt='burgerandfries' class='burgerandfries' ></img>

     <h6 style={{fontSize:14}}> Saturday, November 7th, 2020</h6>
   <h2>I found a hero, bring on the villain!</h2>

   <p>Today has been concerningly beautiful in New York City, with temperatures in the mid-70s and sunshine that makes you forget we’ll all be in darkness by 5:30 p.m. Combine the Midsommar-esque cloudless sky with the raucous, city-wide celebrations of Joseph R. Biden’s election victory — apparently ceaseless car-honking is a way of showing joy, not just frustration — and the whole day felt kind of whimsical. 

</p>
<p>In the spirit of whimsy, I decided to veer slightly off my beaten path and head down to Essex Market on Delancey Street for some very special, thank-God-the-election-is-finally-over lunch.


</p>  
<p>Essex Market — opened in May 2019 after relocating and re-branding from the 79-year-old Essex Street Market — has a <a href='https://www.essexmarket.nyc/our-vendors' target='blank' style={{color:'blue', fontSize: 16}}>murderer’s row of food options</a>, from the Swedish snack shop Nordic Preserves, Fish & Wildlife Co. to the acid-dream of Shopsin’s 900+-item menu.

 </p>
<p>But, all whimsy aside, I went to Essex with a particular focus — obtaining a hot, messy, meaty sandwich from Heroes & Villains. Heroes & VIllains serves up multiple stand-out sandwiches — Eater NYC crowned their fried chicken sandwich, the Proud Mary, <a href='https://ny.eater.com/2019/12/18/21024082/essex-market-market-line-best-food-nyc' target='blank' style={{color:'blue', fontSize:16}} >among the 10 best dishes at the Essex Market opening</a> — and their menu also includes creative riffs <a href='https://www.talech.com/biz/918900/Heros-Villains-New-York-NY#/menu' target='blank' style={{color:'blue', fontSize:16}}> on fried chicken parm subs and Bronx-style chopped cheese.</a> 

</p>

<p>Given the vernal vibes and the people literally dancing in the streets, I felt a double cheeseburger would be an appropriate order; enter the Lil Susie, a charred-and-cheesy beauty of a burger that comes with caramelized onions, pickles, and ‘Stoney Sauce’. I went for the double, along with a side of shoestring cheese fries. 

</p>
<p>The order was prepared fresh, and I was able to grab a pair of soft-baked cookies from another market vendor, the cheese shop Riverdel (note to self: come back to Essex Street for blocks of vegan cheese) before picking up my burger and fries and heading to the outdoor seating. 


</p>
<p>The Lil Susie came as advertised — two juicy, dripping patties melted over with American cheese, caramelized onions and that mysterious Stoney Sauce poking out from under a fluffy potato bun. It looked like the platonic ideal of a backyard barbecue burger, the kind of handheld masterpiece every summertime grillmaster strives for. 
</p>
<p>Thankfully, Lil Susie tasted as photogenic as she looked. The patties-and-cheese packed a savory punch of flavor; I could’ve gone straight keto and eaten the whole shebang without a bun. And I can only guess what’s in the sweet-tangy concoction of ‘Stoney Sauce,’ but layering that stuff with caramelized onions and pickles is like mixing cookie butter with any dessert — it can only go right. 
</p>
<p>All together, I’d give the Lil Susie a **kisses fingertips.** And if I have to give a numerical rating, 4.5 out of 5. This burger alone is worth a trip to Essex Market, for all you nascent NYC explorers who are still nervous to venture out. </p>
  <p>Oh yeah, the shoestring cheese fries were also bomb — so crispy and salty, I didn’t even need ketchup! Just let some drops of Stoney Sauce fall all over the fries, mix in the hang-off meat from the burger, and <b>voilà</b> — you’ve got yourself a Lower East Side poutine. 
</p>
<p>	Heroes & Villains, you’re all heroes to me. Keep the lights on please, ‘cuz I’m comin’ back for a Proud Mary.</p>
  <p>Until next time. </p>
   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default HeroesandVillainsPost;