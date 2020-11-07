import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import SmashEgg from '../../SmashEgg.jpg'
import './Eggdays.css'



class EggdaysPost extends React.Component 
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
    
     <img  src={SmashEgg}  alt='smashegg' class='notcenter' ></img>

     <h6 style={{fontSize:14}}> Saturday, October 31st, 2020</h6>
   <h2>Two parts egg, one part burger, 100% delicious</h2>

   <p>I don’t typically bite at the bait of ‘breakfast burgers’ - just give me a burger after noon and a breakfast sandwich before 10 a.m., and don’t confuse me by putting eggs on patties. Naturally, when I encountered the Eggdays pop-up this afternoon at Milk Money Kitchens on Avenue A, I was forced to confront my own small-minded perceptions of what I would consider a burger. Here I could choose among any number of all-day breakfast sandwich options - but if an egg sandwich is eaten after noon, is it still a breakfast sandwich? 
</p>
<p>Eggdays does not shy away from pressing at existential gastronomical queries; their menu aims to <a href='https://compelld.com/finderskeepers/chris-kelly' style={{color:'blue',fontSize:16}}>‘bring the egg to the rest of the day,’ according to founders Chris and Kelly Anderson.</a> They also make their eggs tamagoyaki style - a Japanese technique that involves a specific rectangular pan, the makiyakinabe, used to fry-and-flip multiple layers of eggs into a hot-pocket sized omelette (<a href='https://www.youtube.com/watch?v=XlzTsK-xN0I&t=451s' style={{color:'blue',fontSize:16}}>click here</a> for some hypnotic egg-bubbling-and-flipping footage from Japan). 

</p>  
<p>Inherently, Eggdays is a time-melding and genre-bending concept. I had to lay aside my preconceptions about eggs-in-the-afternoon, buckle the ol' belt down a notch, and give their food a shot. 

 </p>
<p>I always have a hard time choosing what to order at food pop-ups, especially when there are multiple marquee-level dishes on the menu. Who knows when you’ll be back? Eggdays’ short-but-impactful menu includes a Pulled Pork and Pimento sandwich, as well as the Trufflegoyaki - filled with truffle-laced goat cheese. 

</p>

<p>But Saturdays are my days for burgers, and I didn’t want to stray too far from formula; I went for the SmashEgg Burger - a burger-and-egg sandwich with white onion, American cheese, kewpie mayonnaise, and pickled cherry peppers. 

</p>
<p>The comfort zone had officially been breached.

</p>
<p>I only waited a few minutes before I heard my name called from the back of the restaurant. I could tell the sandwich would be great from the hand-off - the waitress, chef, general manager, whoever-it-was that brought me my SmashEgg seemed genuinely excited to place the warm, tin-foil-wrapped package in my hands. The way she said “Enjoy” - it was like she knew I was about to have my mind blown, and she was just happy to hand over the  explosives. 

</p>
<p>The contents of the SmashEgg burger - layered between a milk bun by East Village-based Patisserie Fouet - was about 2 parts egg and 1 part burger, with appealing slivers of onion and bacon peaking out amidst dabs of kewpie mayo. From the first bite, I could tell the egg was the star of the show; if the world ever turns into ‘Cloudy with a Chance of Meatballs,’ I’m seriously going to keep a fluffy-and-cheesy tamagoyaki as a pillow. This was the kind of egg dish you could eat at any point in the day, from breakfast all the way through to a 1 a.m. takeout-and-movie night. 
</p>
<p>But if the egg was the star, it had a stellar cast of supporting players. The thin burger patty supplemented the egg beautifully with a zesty and meaty texture. The bacon was bacon - salty and crunchy and delicious. The pickled peppers-and-kewpie mayonnaise went with the burger-and-egg like special sauce on a Big Mac, giving the whole sandwich an exotic and addictive tang. </p>
<p>I stopped walking-and-eating about three bites in, and huddled on a sidewalk corner to thoroughly enjoy every last ounce of that beautiful burger. I would give the EggDays SmashEgg a 5 out of 5 stars (ya, I’m sticking with the star system here), and if anyone ever reads this blog at any point, I hope it is before November 22nd, 2020, which is the final day of the Eggdays pop-up at 50 Avenue A. 
</p>
<p>And if you are reading after November 22nd, do yourself a favor and Google Eggdays NYC to find out their current operating status and/or location and/or delivery mechanisms, because there’s no way a restaurant this good will end at a pop-up. The world must know about the SmashEgg Burger. The world must know about tamagoyaki (or the world outside Japan, at least). 
</p>
<p>The American space-time-culinary continuum is a lie! Egg sandwiches belong at every meal! Tell the people!
</p>
<p>Until next time. </p>

   </body>

</div>

</ScrollIntoView>
)
}
}

export default EggdaysPost;