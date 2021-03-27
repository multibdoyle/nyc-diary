import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import LonganisaTorta from '../../LonganisaTorta.jpeg'
import './FactoryTamal.css'



class FactoryTamalPost extends React.Component 
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
    
     <img  src={LonganisaTorta}  alt='longanisatorta' class='sausagetorta' ></img>

     <h6 style={{fontSize:14}}> Saturday, March 27th, 2021</h6>
   <h2>Ya ever eaten a sausage sandwich, son?</h2>

   <p>Today was a scintillating, hot mess in the East Village, and I came upon <a href='https://www.factorytamal.com/blank-page' target='blank' style={{color:'blue',fontsize:16}}> Factory Tamal</a> just moments away from hopping on a CitiBike and racing to my apartment to guzzle water.  I initially decided to stop in for a tamale, but was immediately hooked by the torta menu. 
   </p>
   <p>
   Conceptually, tortas have everything I want in a cheat meal — fluffy bread, cheese, meat and spice — but rarely do these Mexican specialties make their way into my Saturday rotation.
Call it a supply problem — tortas are not quite as common as burritos and tacos in downtown Manhattan — or just blame my basic tastes for pizza and burgers. Either way, today was as good a day as any to give tortas their fair shake. 

</p>  
<p>I ordered the Mr. Longaniza sandwich, which comes with black beans, avocado, lettuce, tomato, mayonnaise, white cheddar cheese and longaniza sausage. My only hesitation was the sausage; I was already thirsty, and fearful that eating a sausage sandwich would be like chewing on a bouillon cube. 
</p>

<p>To counter my thirst, I added an Aqua de Jamaica, a.k.a. hibiscus iced tea, as well as a single Rajas con Queso tamale. The ‘con queso’ was the selling point for the tamale; as always, I need me some cheese on Saturdays.

</p>
<p>	I heartily guzzled the hibiscus tea while waiting for the torta and tamale. The Mr. Longaniza, when it did arrive, was a pretty sandwich — layers of black beans, green avocado and lettuce, white cheese and intense red longaniza all vied for space on the ciabatta roll, wrapped in fake vintage newspaper clipping. 


</p>
<p>Contrary to my fears, the longaniza flavor was subtle, almost reminiscent of a spreadable ‘nduja with little buttons of sausage pocketed throughout. Between the avocado, cheese and a thin layer of mayonnaise, the torta was appropriately fatty and moist; I was unsure I’d be able to finish the whole sandwich in one sitting.


</p>
<p>The tamale served as a halftime show for the torta; unpacking the corn husk wrapping and digging under the corn flour dough, I was greeted by a slimy spear of jalapeno, pale ring of onion, fat tomato wedge, and tube of mozzarella cheese. 

</p>
<p>The mistake was mine; I’m a meat-eater, and shouldn’t have ordered a vegetarian tamale. Still, personal biases against shoving steamed vegetables in my mouth aside, the Raja con Queso was a tasty snack. The mozzarella would have served better if it were melted over and around the vegetables, rather than standing alone like string cheese shoved into a healthy school lunch, but I still managed to get a few integrated bites of dough, cheese and veggies.
</p>
<p>I could see tamalas as great training food, like for 5Ks and half-marathons — and <a href='https://nycruns.com/races' target='blank' style={{color:'blue',fontsize:16}}>races are starting again, baby!</a>

</p>
<p>To my surprise, I finished the other half of the torta and still had room for three small chocolates at <a href='https://www.cassecouchocolate.com/' target='blank' style={{color:'blue',fontsize:16}}>Casse-Cou</a>, the plant-based chocolate shop next door. 

</p>
<p>The Mr. Longanize torta deserves a 4 out of 5. Factory Tamal has convinced me of their sandwich-making prowess, and I will almost certainly be back for one of their egg sandwiches, served with ‘special sauce.’ <i>Que misterioso!</i>

</p>
<p>The tamale gets a 3.5 out of 5. My advice — take or leave it — would be to up the cheese level on that thing. I want cheese in the jalapeno, cheese melted on the onion ring, cheese laced into the dough. Really, most of my scores below 4 could be ameliorated if restaurants would simply add more cheese. 
 </p>
 <p>Take note, restaurateurs of New York! In total, a 3.75 out of 5 for Factory Tamal; great torta, good tamale, needs more cheese :)
</p>
<p>Until next time.
</p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default FactoryTamalPost;