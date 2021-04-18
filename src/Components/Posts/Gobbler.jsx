import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import Gobbler from '../../Gobbler.jpeg'
import './Gobbler.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'


class GobblerPost extends React.Component 
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
    
     <img  src={Gobbler}  alt='gobbler' class='gobbler' ></img>

     <h6 style={{fontSize:14}}> Saturday, November 14th, 2020</h6>
   <h2>I did it all for the stuffing</h2>

   <p>My tastes don’t necessarily change with the seasons - I’m as liable to crave a cheeseburger and fries on Christmas Eve as I am on July 4th - but I am a bit of a sucker when it comes to limited-time seasonal menu items. Once the leaves start a-cracklin’ and the temperatures start a-droppin’, you best be comin’ correct with the pumpkin spice and apple cider flavoring. I’m eating and drinking all that. 

</p>
<p>So with <a href='https://www.blueribbonfriedchicken.com/' target='blank' style={{color:'blue', fontSize:16}}> Blue Ribbon Fried Chicken’s</a> “The Chicken Gobbler,” my impetus for ordering wasn’t so much a craving for Thanksgiving foods - though I do appreciate my once-yearly serving of stuffing and cranberry sauce - as it was about - oh, there’s probably a French or German word for it - let’s just say “enjoying the moment?” 


</p>
<p><i>Profite de l’instant.</i> There, that looks so much better; it was hella Fall out, and I was trying to profit in the instant. 

 </p>
<p>So I ordered up the Gobbler - along with a side of smoked macaroni and cheese - and vibed out to Jay Electronica’s lyrical masterpiece “A Written Testimony” while I waited. Polo G’s “Die a Legend” also worked its way in; a little bit of heady hip-hop and a little bit of autotuned drill rap, that’s how I like my Saturday afternoons. 
</p>

<p>The Chicken Gobbler arrived looking like my beloved Aunt had dollopped on the mashed potatoes herself; seriously, this sandwich was stacked. Stuffing, mashed potatoes, gravy and cranberry sauce enrobed the fried chicken like a lovely, aggressively thick Fall sweater; as I picked up the sandwich, an entire Thanksgiving dinner-worth of topping fell out the back. 

</p>
<p>The tart-sweet cranberry sauce cut through the fat of the chicken and potatoes to give the whole sandwich a pleasant, fruity flavor. The stuffing was salty, savory and delivered an enjoyable mouth-feel that made me wonder why stuffing doesn’t get incorporated into meals year-round. 


</p>
<p>Though I’m not the only one who has proposed a wider adoption of stuffing. <a href='https://www.gq.com/story/why-stuffing-needs-to-be-a-year-round-food' target='blank' style={{color:'blue', fontSize:16}}>Curse you GQ, always one step ahead. </a>

</p>
<p>As I worked my way through the sandwich, the bun started to lose its structural integrity, and eventually disintegrated into the sweet-savory mush of the potatoes, stuffing and cranberry sauce. I finished off the whole dish with a fork; considering I won’t be visiting family this year at Thanksgiving - and I’m not about to roast a turkey and whip up some cranberry sauce on my own - the Chicken Gobbler very well might have been my proxy Thanksgiving dinner for the year. Not a terrible way to hit your stuffing-and-cranberry sauce quotient. 

</p>
<p>Overall, I’d give the Chicken Gobbler a 3.5 out of 5 - a heavy, messy, flavorful sandwich which definitely tasted like Thanksgiving, and which I’d certainly consider ordering outside of the Fall months. Start offering that thing in ghost kitchens, Blue Ribbon! Oh, and keep serving the smoked mac-and-cheese - I’m not reviewing that, but it was bomb. I gobbled it up  - HAHAHA. Until next time. 
</p>
   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default GobblerPost;