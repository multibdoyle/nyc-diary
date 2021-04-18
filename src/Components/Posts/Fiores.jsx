import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import FioresPizza from '../../FioresPizza.jpeg'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'
import './Fiores.css'



class FioresPost extends React.Component 
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
    
     <img  src={FioresPizza}  alt='fioresslice' class='fioresslice' ></img>

     <h6 style={{fontSize:14}}> Sunday, April 10th, 2021</h6>
   <h2>A pizza spot named for an NYC firefighter, what's not to love?</h2>

   <p>Walking down Bleecker Street yesterday, I was surprised to see a ‘Grand Opening’ sign draped from <a href='https://www.yelp.com/biz/fiores-pizza-new-york' target='blank' style={{color:'blue',fontsize: 16}}>Fiore Pizza’s </a>familiar red storefront. 
   </p>
   <p>
   “Grand Opening?” Certainly not! Fiore’s has long been one of my favorite pizza places in the Village, not just for their consummately cheesy thin-crust slices — which are excellent — but for the rich backstory. The walk-in spot is named in honor of <a href='https://www.firehero.org/fallen-firefighter/michael-c-fiore/' target='blank' style={{color:'blue',fontsize: 16}}>New York City firefighter Mike Fiore</a>, who died in the collapse of Tower 2 on 9/11.

</p>  
<p>A pizza spot named for a front-line worker, of course, is always worth supporting. But I was curious about the rationale behind this ‘Grand Opening’; venturing inside, I noted the new, freshly-painted white walls, as well as a few exotic-looking pies behind the glass cases. 

</p>

<p>Artichoke-and-anchovy? Vegan and gluten-free? Looks like Fiore’s has caught up with the times! 

</p>
<p>	
My personal favorite pie, the pepperoni, looked to be topped with thicker, meatier coins of ‘roni than the old pies. A friendly fellow behind the counter asserted with unwavering confidence that the revamped Fiore’s was "better."


</p>
<p>
“We can’t wait for One Bite to come here,” said my guy. 


</p>

<p>El Prez seems to be <a href='https://www.youtube.com/watch?v=OCvuJ259k2g' target='blank' style={{color:'blue',fontsize:16}}>showcasing his pizza-rating talents in L.A. and Miami as of late</a>, and <i>somebody</i> needs to assess the new Fiore’s for the masses. Allow NYC Diary to be of service!

</p>


<p>I ordered two pepperoni slices, which were casually folded into a white paper bag after emerging from the gas-coal oven. Investigating the slices at my apartment, I noted the pizza looked a little dry, with some spots bereft of sauce. 

</p>
<p>But the first bite buried any doubts. The new Fiore’s pizza, like the old Fiore’s pizza, is fantastic. The sauce is piquant, the cheese is charred and plentiful, the crust is chewy and slightly airy. I could down four of these slices in a sitting, easy — they are the perfectly floppy paragon of New York City pizza. 

</p>
<p>I give Fiore’s a 4.5 out of 5; the pizza was always some of the best you can get downtown, but with a revamped recipe and new interior, I could see this place taking over the Village late-night food game like never before. 

 </p>
 <p>Oh, and some other good news — Fiore’s now takes credit card! Many a time was I stymied by the requirement for greenbacks at the old Fiore's — but no more!

</p>
<p>Onward and upward, Fiore’s. It’s gonna be a hot vax summer for ya. 

</p>
<p>Until next time.</p>
   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default FioresPost;