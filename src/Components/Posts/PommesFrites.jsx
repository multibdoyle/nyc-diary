import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import PommesFrites from '../../PommesFrites.jpeg'
import './PommesFrites.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'



class PommesFritesPost extends React.Component 
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
    
     <img  src={PommesFrites}  alt='frenchfries' class='pommesfrites' ></img>

     <h6 style={{fontSize:14}}> Saturday, March 6th, 2021</h6>
   <h2>Dat zijn goede frietjes, ya?</h2>

  
   <p><a href='https://www.pommesfritesnyc.com/' target='blank' style={{color:'blue', fontsize:16}}>Pommes Frites</a> on Macdougal Street sells french fries, and only french fries — thick-cut and twice-fried, Belgian-style. The current location is a below-ground sliver of a walk-in space, paneled with unburnished timber; it’s one of the prettier takeaway joints you’ll find in the neighborhood.

</p>
<p>I stopped by Pommes Frites while walking through Greenwich Village this afternoon. Confronting the 40+ sauce options on the Old European-fonted wooden menu, my brain started to frizz out a bit. Analysis paralysis can be a real struggle at Pommes Frites. 
</p>
<p>Fortunately, I was able to keep the ol' lizard brain under control and make some bold moves: First, the Especial sauce, which is Frite sauce (a leaner, sweeter mayonnaise) with raw onion and ketchup. Next, the War Sauce, which is Frite sauce, peanut sauce and raw onion. And to top off the <i>sous</i> suite, I went for Horseradish Chipotle Ketchup; I do like my potatoes spicy. 
 </p>

<p>Pommes Frites make their chips fresh to order. The frites were still piping hot by the time I returned to my apartment, even after I traipsed the long way home to pick up a bowl of Japanese curry (the ultimate comfort food).
</p>
<p>The little plastic tubs of unmixed mayonnaise and ketchup, pocked with raw onion slices, were not photogenic. I may be adventurous, but I’m still American; I prefer a ketchupy, oniony remoulade to cover the fry in one dip, rather than dabbing between separate blobs of egg yolk and tomato sauce. 

</p>


<p>
Unmixed sauces aside, the fries were crispy, salty and plentiful; my regular-size cone was comically overflowing with chips in the bag. Being from Virginia, I call this ‘Five Guys-style’, and it is the way takeout fries should always be served. 


</p>
<p>I gave the War Sauce an honest go — the peanut sauce portion was thick and nutty, but as far as a topping for french fries, a bit dull. The horseradish chipotle ketchup was appropriately pungent and spicy, but again, lacked the sweetness I savor with my fries. 

</p>
<p>Ultimately, I dipped about two-thirds of the fries into the ketchup portion of the Especial Sauce, poking into the mayonnaise for a little extra bit of fat. 

</p>
<p>So, after all these years, I’m still mainly a ketchup guy; Lord help me, I can’t change. That said, Pommes Frites has more than enough ketchup variation on their menu to give even the most pedestrian of palettes a chance to experiment. I fully expect the restaurant to return to late-night munchie supremacy in the coming months, as live music and indoor dining continue to open up. 

</p>
<p>From a New York City Diary perspective, I give Pommes Frites a 3.5 out of 5 — hot, salty, and vaguely European. Just like a good Saturday night movie. Speaking of which, I’m off to pick from my Amazon Prime list. 

</p>

<p>Until next time. 
</p>


   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default PommesFritesPost;