import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import BleeckerStreetPizza from '../../BleeckerStreetPizza.jpeg'
import './BleeckerStreetPizza.css'
import CommentForm from '../CommentSection/CommentForm.js'
import CommentList from '../CommentSection/CommentList.jsx'


class BleeckerStreetPizzaPost extends React.Component 
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
    
     <img  src={BleeckerStreetPizza}  alt='pizza' class='bleeckerstreetpizza' ></img>

     <h6 style={{fontSize:14}}> Saturday, April 24th, 2021</h6>
   <h2>A pizza joint for all weather</h2>

   <p>The Google location description of <a href='https://www.bleeckerstreetpizza.com/' target='blank' style={{color:'blue', fontsize: 16}}>Bleecker Street Pizza</a> might just tell you almost everything you need to know. 

</p>
<p>
<i>“Basic pizza shop on a busy corner that offers cheap slices & pies late into the night.”</i>

</p>  
<p>Is Bleecker Street Pizza basic? Sure, but it’’s New York basic, which could qualify as the best pizza most anywhere else. All the usual suspects are behind glass — pepperoni, sausage, buffalo chicken, a pepperoni-sausage-green pepper and onion slice which I will henceforth refer to as ‘Supreme’ — and you’ll usually get your slice heated out of the oven in less than five minutes.
 </p>
<p>Bleecker Street Pizza is also extremely reliable. Extremely. I’ll never forget my lunchtime trek during <a href='https://en.wikipedia.org/wiki/February_15%E2%80%9320,_2021_North_American_winter_storm#:~:text=The%20February%2015%E2%80%9320%2C%202021,20%2C%20causing%20at%20least%2023' target='blank' style={{color:'blue',fontsize: 16}}>Winter Storm Viola</a> in February, where this place was the only restaurant open in the neighborhood.


</p>

<p>Sure, an errant wind gust ended up blowing my pepperoni slice into a snow bluff and I didn’t get to enjoy the full experience, but I suppose that’s besides the point; Bleecker Street Pizza stays on their job serving up hot, fresh slices to the West Village. 

</p>
<p>Walking through the hothotHOT sidewalks of West Village earlier this evening, I treated myself to a ham-and-pineapple and a Supreme slice. Bleecker Street slices are floppy and very cheesy; salty dices of ham were stacked on top of one another on the ham-and-pineapple, and the fresh pineapple did the job with bursts of fructose in every bite. The supreme slice ran the appropriate gamut of textures: meaty, crunchy, some sweet from the onion, and cheesy. 


</p>
<p>Bleecker Street Pizza doesn’t skimp on toppings, and you’re liable to want a nap after chowing down. But hey! That’s why their slices work equally well as a nightcap as in a snowstorm, or for early dinner on a lazy Saturday. 
</p>
<p>A 3.5 out of 5 for Bleecker Street Pizza. Prime pizza in a prime location; what’s to hate?

</p>

<p>
Until next time.    
</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default BleeckerStreetPizzaPost;