import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from './../ScrollIntoView/ScrollIntoView'

import './Phase_4.css'


class Phase4Post extends React.Component 
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
    
     <img class='img-fluid' style={{borderRadius:12, position:'relative'}} src='https://live.staticflickr.com/5772/30023004952_7bfc77fbf6_b.jpg'  alt='chef' height='30%' width='30%' class='center' ></img>

     <h6 style={{fontSize:14}}> Saturday, July 20th, 2020</h6>
   <h2>Normal but Like Not At All Normal: Who's Ready for Phase 4?</h2>
   <p>The city is stiflingly hot this weekend. A lot of times I actually enjoy intense heat - nothing better than an early-morning run, preferably just after sun-rise, on a day which is going to be north of 90 degrees. I always get back sweating and slightly burnt and ready to pound something sweet and carbonated (kombucha, you’re my love language), feeling like I beat the better part of the day. 
 </p>

 <p>
	On the other hand, if you wait too late to run on a hot summer morning - really anytime after 7:30 a.m. - you may end up feeling nauseous and slightly heat-strokey as you pound the pavement. I cursed every ounce of my excess fat and checked my watch about 500% more than normal on this morning’s 8 a.m. 5-miler up Hudson River Park.  
 </p>

 <p>Tropical temperatures aside, I have good reason to get in shape right now, as does every New Yorker: We’re entering <a href='https://www.timeout.com/newyork/news/everything-you-need-to-know-about-phase-4-reopening-plans-in-nyc-071720' target='blank' style={{color:'blue', fontSize: 16}}> Phase 4</a>!
</p>
<p>At a high-level, the Phase 4 re-opening means outdoor arts and entertainment, media production and sports competitions - without fans - are all back in business. </p>
<p>Still out of commission are indoor dining, indoor museums, and Broadway. And of course the cloth masks, hand sanitizer and nervously veering to the other side of the sidewalk aren’t going anywhere until we get a vaccine.</p>

<p>Or until God supernaturally abolishes coronavirus from the face of the Earth. 
</p>

<p>I’m cool with either a supernatural or a scientific cure. Not picky over here. 
</p>

<p>Oh, and if anyone tells me to run with a mask this summer, I’ll throw ‘em my sweaty shirt for their own face covering. I’m spiteful like that. Don’t tell me what to do, ya’all. #HotBoySummer
</p>
  

   </body>

</div>

</ScrollIntoView>
)
}
}

export default Phase4Post;