import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import RubirosaPizza from '../../RubirosaPizza.jpeg'
import './Rubirosa.css'

import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'

class RubirosaPost extends React.Component 
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
    
     <img  src={RubirosaPizza}  alt='rubirosapizza' class='rubirosapizza' ></img>

     <h6 style={{fontSize:14}}> Saturday, December 26th, 2020</h6>
   <h2>Staten Island-style pizza warmed my soul on Christmas</h2>

   <p>As far as I can tell, the maelstrom of 2020 has done little to dim Nolita’s shine as a pizza haven; the lines are still down the block for <a href='https://princestreetpizzanyc.com/' target='blank' style={{color:'blue',fontSize:16}}>Prince Street Pizza</a>, <a href='https://www.firstpizza.com/' target='blank' style={{color:'blue',fontSize:16}}>Lombardi’s</a> has started offering individual slices out of the ol’ coal oven, and new-school sit-down establishments like <a href='https://www.rubirosanyc.com/' target='blank' style={{color:'blue',fontsize:16}}>Rubirosa</a> have continued to feed the pizza-hungry masses with excellent whole pies via delivery. 


</p>
<p>My only prior experience with Rubirosa was earlier this year, when a friend of mine claimed to have become ‘addicted’ and ordered their pizza at least three times in one week. Now, I’ve had worse addictions, but Rubirosa does operate on a tried-and-true formula; the founder, Angelo Pappalardo, uses the same thin cracker-style crust as Joe & Pat’s, the Staten Island pizza institution started by his dad, Giuseppe. 

</p>  
<p>Browsing Seamless on Christmas yesterday, I decided that I’d been a good-enough boy this year to splurge on a bit of Nolita’s finest. I was initially put off my game by their offering of only small and large options; knowing that I should expect a thin crust — and also, you know, it was Christmas — I decided a large would be the best bet to sate my yuletide hunger pains. I opted for the ‘Honey Pie,’ with mozzarella, fontina, soppressata, spiced honey and parsley, and added extra mozzarella as well.

 </p>
<p>Merry Christmas to me, right? 

</p>

<p>The pizza came fast, hot and fresh; opening up the box, beholding the beautiful steaming dish within, I had to admit — Rubirosa really does make the platonic ideal of New York City pizza. Look at that oiled-and-tanned cheese, those thin cuts of soppressata — that perfectly charred crust! 


</p>
<p>I dove right in, noshing down one hot slice in a few quick bites, nibbling at the end a bit, before tossing the bone and going for another. And another. Then another. I probably didn’t stop to take a breath until about five slices in. The thin crust affects a particularly serious case of eating-way-past-the-point-when-you-realize-you’re-full; ‘addictive’ is about the right descriptor.

</p>
<p>But let’s not give all credit to the crust; every element of the pie melded together to create a beautiful whole. The sauce, dappled under-and-around the cheese and soppressata, was bright and sweet; the cheese was rich and plentiful. Did I mention I added extra cheese? I’m glad I did so; the soppressata, beautifully marbled and married to the cheese, added bursts of salty-savory stimulation throughout. 

</p>
<p>I finished that pizza in clean under an hour. I don’t eat large pizzas to myself often. It’s not a habit; I don’t <i>want</i> it to be a habit. But for Rubirosa’s Honey Pie, on Christmas 2020, it was absolutely the move to be made. 

</p>
<p>A 5 out of 5 for Rubirosa; a stand-out pizza in a year full of, if nothing else, <a href='https://www.multibdoyle.com/the-genius-of-two-boots-pizza' target='blank' style={{color:'blue',fontSize:16}}>really great pizza</a>. 

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

export default RubirosaPost;