import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import './Tattoos.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'
class Tattoos extends React.Component 
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
    
     <img src='https://images-na.ssl-images-amazon.com/images/I/51C43h9BCsL._AC_.jpg'  alt='peep' class='center' ></img>

     <h6 style={{fontSize:14}}> Sunday, September 20th, 2020</h6>
   <h2>I was predestined to get my tattoo</h2>
  <p> I used to ask my Mom if I could get tattoos - actual permanent ones - of my favorite cartoon and pop culture characters. I’m grateful she disallowed that <i>Mighty Morphin Power Rangers</i> ink; outer-bicep tattoos are super passé these days. 
 </p>
  
   <p>
   So I’ve always had ideas for tattoos, though my interest waned considerably as I got into college and - inculcated with the philosophy that my inherent value is dependent on learned folks’ opinion - began to think them trashy. 

 </p>
   <p>When I became born-again, circa 2012, I began to notice lots of cool, clean-living Christians with tattoos - not least of which was Pastor Carl Lentz, <a href='https://relevantmagazine.com/culture/carl-lentz-no-the-old-testaments-rules-forbidding-tattoos-dont-still-apply/' target='blank' style={{color:'blue',fontSize:16}}>the patron saint of tatted-up pastors</a>. When I eventually moved to New York City, getting a tattoo had become a very real desire, and I had a distinct concept in mind -  not so much a ‘I would look so cool with this!’ idea, but a ‘this is my life and I want to live it / share it / own it’ conviction. 

 </p>
<p>The vision - a black cross on the inside of my left forearm - was plugged into my mind for years before I acted on it. I remember staring at the gym’s full-length mirror in moments of rest and twisting my left arm curiously, thinking, ‘Why isn’t the cross there?’ 

</p>
<p>I almost pulled the trigger in 2016, after peering into <a href='https://www.threekingstattoo.com/new-york-city' blank='target' style={{color: 'blue', fontSize: 16}}> Three Kings Tattoo</a> on Avenue B and feeling compelled to go get inked. But I was also conflicted - about how I might not be honoring my body, about the permanence, about my family’s inevitable disapproval. I re-read Leviticus 19:28 and went on my way. 

</p>
<p>Flash-forward two years, to 2018 - I had my first solo apartment in Nolita, some lost friends, a new outlook on my health and fitness, and a more flexible, confident view on Christianity. Within a few months of soaking in the vibes south of Houston Street, the idea of a tattoo didn’t just seem exciting, it seemed necessary. 

</p>
<p>I remember walking into Soho Ink on Lafayette and feeling a peace that passed all understanding as the nice man razored into my arm. Even as he poked at my Christian views and eschewed his opinion that ‘we’re all gods,’ I was all the more convicted about the positivity of my choice - the body art was planting seeds in others.  

</p>
<p>I’ve never regretted the tattoo; not even when the ink began to leak across my arm, after I (foolishly) tied it with my sweat-drenched t-shirt on a morning run. Not even when my aunt gave me a tragic look and said ‘Oh, no’ when she spotted the cross at a Christmas get-together (I love her anyway). 
  </p>
<p>I’ve got more ideas for tattoos, but as of yet, no visions. No imagery has struck me as so vital to have on my body as the cross. So, my first tattoo might be my last - but the great thing about visions is, you never know when or where they’ll strike. 

</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default Tattoos;