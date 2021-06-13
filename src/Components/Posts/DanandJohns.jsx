import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'

import './DanandJohns.css'

import CommentForm from '../CommentSection/CommentForm.js'
import CommentList from '../CommentSection/CommentList.jsx'
import DanandJohnsWings from '../../DanandJohnsWings.jpeg'


class DanandJohnsPost extends React.Component 
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
    
     <img  src={DanandJohnsWings}  alt='dandj' class='danandjohnswings' ></img>

     <h6 style={{fontSize:14}}> Saturday, June 12th, 2021</h6>
   <h2>My only regret is not ordering a fifty-piece</h2>

   <p><a href='http://danandjohns.com/about' target='blank' style={{color:'blue', fontsize: 16}}>Dan & John’s Wings</a>, founded in a Brooklyn apartment by two Buffalo natives, had been on my hit list for a while before this year. Their expertly-sauced chicken has been featured on pretty much every <a href='https://www.grubstreet.com/bestofnewyork/absolute-best-chicken-wings-in-nyc.html' target='blank' style={{color:'blue', fontsize: 16}}>best-of New York</a> <a href='https://ny.eater.com/maps/best-chicken-wings-nyc' target='blank' style={{color:'blue', fontsize: 16}}>list of note</a>, and tend to run out days in advance in the run-up to major wing events like the Super Bowl. 
</p>
<p>I accidentally ordered boneless wings on my first go-round with Dan & John’s on Uber Eats. Boneless wings, of course, are basically chicken nuggets and not a suitable meal for anyone over the age of 16. The fault was mine; I ate the chicken with a good degree of self-loathing. 

</p>  
<p>I decided to give Dan & John’s another shot today, double-checking I had selected ‘traditional’ wings before confirming my order in Uber Eats. My garlic parmesan ten-piece arrived in good time; as soon as I tore open the sauce-soaked paper bag, I knew I was looking at the real, bone-in deal. 

 </p>
<p>Plump and glistening with a white-buttery parmesan sauce, the ten-piece set was a perfect size late-afternoon second lunch (yes, that’s a thing for me on Saturdays). The flavor, too, was an expertly mixed gravy of sharp parmesan with mildly pungent garlic. 

</p>

<p>I capped off the wings with a little jaunt to a trusty corner bodega, where I picked up a 16 oz. bottle of citrus kombucha, a cashew butter chocolate bar and a pint of <a href='https://www.multibdoyle.com/you-belong-with-me-van-leeuwen-oat-milk-ice-cream' target='blank' style={{color:'blue', fontsize: 16}}>Van Leeuwen Brown Sugar Chunk oat milk ice cream. </a>

</p>
<p>The ice cream pint sent me over the deep end into the most serious food coma I’ve had in a long, long time; here I lie on my bed, languidly tapping out barely-coherent food ramblings, regretting many decisions, savoring a few, in the back of my head thinking, <i>I wish I had one more wing…</i>

</p>
<p>A 4.5 out of 5 for Dan and John’s Wings. I’m going to collect all the flavors, like Pokemon. Then I’ll be a Pokemon-collecting wing-eating lazy guy on a bed. How ya like me now?

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

export default DanandJohnsPost;