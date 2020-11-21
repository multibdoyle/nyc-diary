import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import TwoBootsPizza from '../../TwoBootsPizza.jpeg'
import './TheDivine.css'



class TheDivinePost extends React.Component 
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
    
     <img  src={TwoBootsPizza}  alt='divinepizza' class='divinepizza' ></img>

     <h6 style={{fontSize:14}}> Saturday, November 21st, 2020</h6>
   <h2>When the moon hits your eyes like Two Boots' pizza pie... </h2>

   <p>F. Scott Fitzgerald wrote, “The test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function.” 

</p>
<p>New York City is full of those creative tensions - in the neighborhoods, in the arts, and certainly in the food. To that extent, <a href='https://twoboots.com/' target='blank' style={{color:'blue',fontsize:16}}>Two Boots </a>- the now-nationwide pizza joint founded on Avenue A in 1987 - is either a restaurant with a severe ongoing identity crisis, or a pantheon of opposing cultural and culinary ideas held together by truly first-rate minds. 


</p>
<p>The eponymous ‘two boots’ are Louisiana and Italy - which, prior to becoming a fan of Two Boots, I didn’t know Louisiana was considered to be shaped like a boot. I’d say it looks more like a clodhopper fit for swamp-sledging, in contrast to Italy’s slim and elegant lady’s knee-high. Either way, the restaurant mashes together flavors of New Orleans with the great Italian pizza tradition, and tosses in some serious indie filmmaking roots to give their menu an eclectic, cult-theater-from-the-1990s vibe. Some of their more popular pies include The Bayou Beast - a personal fave, featuring andouille sausage, crawfish and shrimp -- and The Mr. Pink, with creole chicken, plum tomatoes and fresh garlic. 

 </p>
<p>
For lunch yesterday, I went for The Divine -- a red-sauce pie with capicola ham, red onions, jalapenos and mozzarella. I blindly assumed that the 14” pie I was ordering from the Avenue A location was the same size as the personal 'small' pizzas I had previously ordered from their West Village outpost. When the pizza did arrive, I was - not disappointed - <i>surprised</i> and a little intimidated to see that I had in fact signed myself up for a hearty medium sized pie. 

</p>

<p>How fitting of Two Boots, challenging my limits of conventional thinking and what I would consider a ‘typical’ lunch. I dove right in, woofing down a slice before realizing that this mundane situation might be something to actually blog about. That’s when I whipped out my iPhone and submitted the pizza to a lil’ photo shoot, taking the picture you see above. 

</p>
<p>
Do you see it, though? The crisp-and-curled capicola ham, delicate petals of red onion, verdant diced jalapeno, perfectly tanned mozzarella - that, friends, is an expert pie, born of over 30 years of consistently toeing the line between traditional New York slices and completely off-the-wall hippie-dippie stoner nonsense food. Even if you consider yourself a real basic pizza eater, just cheese and pepperoni, a place like 2 Boots will make you step out of your comfort zone. 


</p>
<p>The Divine lived up to its name, with the salty and slightly firm capicola coming through as the primary flavor on the pie.  The jalapeno multiplied the onion petals’ flavor and delivered a nice, crunchy kick; their signature cornmeal crust is a chewy wonder of a dough, holding up well to the ample toppings while still remaining soft enough to fold, and flavorful enough to eat <i>sans</i> meat and cheese. 
</p>
<p>I finished the whole pie in about twenty minutes, feeling like I wouldn’t have wanted any less, but certainly did not want more. I’m not sure if 14” is my new sweet spot for personal pizza sizes, or if I was just particularly famished from skipping breakfast after the gym, but the hefty Divine was exactly what I needed yesterday.

</p>
<p>Overall, I give the Divine from Two Boots a 4.5 out of 5 - and I’m highly liable to start working my way down their cavalcade of crazy themed pizzas, looking for a perfect flavor combo. 

</p>
<p>Because talent hits a target no one else can hit; genius hits a target no one else can see. And so on with the genius quotes. </p>
  <p>Until next time. </p>
  
   </body>

</div>

</ScrollIntoView>
)
}
}

export default TheDivinePost;