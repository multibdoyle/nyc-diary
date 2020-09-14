import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import './California.css'


class CaliforniaPost extends React.Component 
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
    
     <img class='img-fluid' style={{borderRadius:12, position:'relative'}} src='data:image/jpeg;base64,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'  alt='chef' height='20%' width='20%' class='center' ></img>

     <h6 style={{fontSize:14}}> Monday, September 14th 2020</h6>
   <h2>The West Will Rise Again</h2>

   <p>It was a vibe I never forgot. But, after high school, I surprised myself by choosing to head deep into the north-east; besides one year abroad in India, I’ve spent the last 12 years in New York State, and the last six in New York City. 

</p>
  <p>Both my siblings are currently living their bliss out west - my twin brother in Los Angeles and my little sister in San Francisco - and I’ve still got some Cali dreams buried deep within my cold New York soul. My most recent ex called herself ‘bi-coastal’ - I’m pretty sure she was trying to turn the reference sexual - but I would say I’m the same way: Isn’t the yuppie dream to have an apartment in Manhattan, a condo in L.A. (or a house! Oh, I shouldn’t get greedy…), and a job that willingly jets you back and forth between the two? 
     </p>
  
  <p>For now, I’m proud to hold it down for the East, bumpin’ that <a href=' https://www.youtube.com/watch?v=yjBDozsKXqM' target='blank' style={{color:'blue', fontSize: 16}}> new Dave East</a>, nahmean...But the red-and-orange hellscape pictures coming out of California this past week are making me wonder if I’m ever going to shake it, shake it out West...like, ever.
</p>
<p>The colors have something to do with smoke particles blocking short wavelength colors from the sun - apparently red and orange have long wavelengths while yellow, blue and green are short. Whatever the scientific reason, it’s scary to see <a href='https://www.bbc.com/news/topics/cjyq4rd3x3zt/california-wildfiresDolores' target='blank' style={{color:'blue',fontSize:16}}> Dolores Park looking like the movie set of an apocalypse film about the last days of Earth</a>. 
</p>
  <p>
  Prayers for all my West Coast fam. Stay safe. 
  </p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default CaliforniaPost;