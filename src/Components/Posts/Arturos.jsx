import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import ArturosPizza from '../../ArturosPizza.jpeg'
import './Arturos.css'

import CommentForm from '../CommentSection/CommentForm.js'
import CommentList from '../CommentSection/CommentList.jsx'


class ArturosPost extends React.Component 
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
    
     <img  src={ArturosPizza}  alt='arturos' class='arturospizza' ></img>

     <h6 style={{fontSize:14}}> Saturday, May 29th, 2021</h6>
   <h2>The pizza was almost too big...almost...</h2>

   <p>The three minutes I spent inside <a href='https://www.yelp.com/biz/arturos-new-york' target='blank' style={{color:'blue', fontsize: 16}}>Arturo’s Coal Oven Pizza</a> this afternoon felt like I had stepped through a time portal into old New York — dim lighting, smoldering headshots on the walls, a four-piece jazz quartet swinging away on an elevated platform stage. I half-expected a smoky brunette to strut across the bar, blow cigarette smoke in my face and demand I stop staring and buy her a drink. 
</p>
<p>Arturo’s has been slinging pizza <a href='https://ny.eater.com/2013/3/29/6458861/arturos-a-pizzeria-full-of-old-school-village-charm' target='blank' style={{color:'blue', fontsize: 16}}>at the same corner of Houston and Thompson Street since 1957</a>, so classic Greenwich Village-cool is part of the appeal. I perhaps missed the full Arturo’s charm by picking up my order, but based on those few minutes of jazz-infused magic I would definitely tag this place as a great option for impressing  out-of-towners. 

</p>  
<p>Ambiance aside, the big question for me always boils down to: <i>How is that pizza, tho?</i>

 </p>
<p>Opening up the pizza box in my apartment, the pie looked in order and sufficiently coal-oven charred. I was happy to see an abundance of toppings to complement the hefty crust: beautiful red-hot pepperoni coins and stone-colored chunks of sausage married into a thick layer of mozzarella, surrounded by scattered pools of sauce. 

</p>

<p>The thicker-style crust was sheened with olive oil at the edges, and had fantastic chew and flavor. The only less-than-superior element of the pizza, I thought, was the sauce, which was weak in flavor and a bit soupy. 


</p>
<p>All told, I thoroughly enjoyed each slice of this pie. Getting through all 8 was a bit of a challenge — but as I’ve said before, I’m not basic. Exactly one episode of <a href='https://www.imdb.com/title/tt3398228/' target='blank' style={{color:'blue', fontsize: 16}}>‘Bojack Horseman’</a> later, the pizza was vanquished. 

</p>
<p>I believe the <a href='https://onebite.app/' target='blank' style={{color:'blue', fontsize: 16}}>One Bite scale — from 1 to 10 — may be most appropriate</a> for Arturo’s coal-oven classic. My score? A 7.7 out of 10. Very good pizza, probably an even greater sit-down experience. 
</p>
<p> And though the pizza was huge, I still managed to finish a pint of Ben & Jerry's ice cream almost immediately after. How's that for Greenwich Village hip?
</p>
<p>Until next time. </p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default ArturosPost;