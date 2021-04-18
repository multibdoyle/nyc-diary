import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import VesuvioBakery from '../../VesuvioBakery.jpeg'
import './Vesuvio.css'

import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'
class VesuvioPost extends React.Component 
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
    
     <img  src={VesuvioBakery}  alt='pint' class='pint' ></img>

     <h6 style={{fontSize:14}}> Sunday, January 3rd, 2021</h6>
   <h2>Dawww look at that lil' chocolate-hazelnut bombolini....</h2>

   <p><a href='https://www.instagram.com/vesuviobakerynyc/?hl=en' target='blank' style={{color:'blue', fontsize:16}}>Vesuvio Bakery</a> — the reincarnation of a nearly century-old family bakery run by the legendary <a href='https://www.nytimes.com/2003/07/05/nyregion/anthony-dapolito-82-community-advocate.html' target='blank' style={{color:'blue',fontsize:16}}>‘mayor of Greenwich Village’ Anthony Dapolito</a> — opened its green-painted doors in March of last year, right in time for the first city-wide lockdowns. During the worst part of the pandemic, Vesuvio was a neighborhood oasis for anyone who needed a break from the walls of their apartment. 

</p>
<p>The food at Vesuvio is as perfectly sugar-coated and rustic-delicious as the atmosphere would suggest. I’ve spent many a morning in Vesuvio, post-gym, masked-up, letting the mid-century jazz salve my soul while waiting for a coffee. 


</p>
<p>And so I found myself a few days after Christmas, waiting for my cheat day order — a mocha coffee, a bombolini and a chocolate chip cookie. Never mind that Christmas week for me was one long ‘cheat day,’ let’s talk about the chocolate-hazelnut-filled bombolini. 

 </p>
<p>	 I’m not sure there’s a better way to describe the bombolini then ‘adorable.’ The stuffed little doughnut was the shape and heft of a regulation-size hackey sack.  

</p>

<p>I have found the first bite of a Vesuvio bombolini, in most cases, will give you a warm mouthful of soft, granulated sugar-covered brioche, slicked from the edges of the Nutella core; every bite thereafter is all hazelnut and milk chocolate, as the filling breaks free of doughy confines and laps onto the rest of the doughnut. 

</p>
<p>One bombolini will probably be enough to satisfy a typical European tourist, which Vesuvio bakery has seemed to attract as lockdowns have lifted.  

</p>
<p>Now, onto the cookie — as previously noted, I regularly get down with Vesuvio cookies. I note this only to emphasize the cookie I had on Tuesday, January 29th was the best version of the Vesuvio cookie I’ve had to date. 

</p>
<p>	Number one, it was warm; maybe a happy result of ordering in the morning, but the difference between a warm and room-temperature cookie is like the difference between cream or no cream in coffee. We’re talking radically altered chemical entities, dawg. 
</p>
<p>Further, the wide, soft cookie possessed a deep caramelized-toffee flavor that I haven't detected in prior cookies; Vesuvio bakers, it seems, are continuing to perfect their methods. Multiple floors of intense chocolatey chunks were layered into the dough like fossils in soil, or NYC denizens in a typical residential building.

</p>
<p>	Vesuvio have got themselves a contender; I’d stack their cookie against any of downtown Manhattan’s chocolate-chip cookie heavyweights. 
</p>
<p>Urban exodus, dining restrictions and neighborhood riots didn’t stop Vesuvio in 2020, and I doubt the bakery will be much bruised by whatever challenges the new year brings. Matter of fact, any challenges that come my way in 2021, I'll greet ‘em with a cookie and a bombolini — it’s darn hard to be unhappy while a place like Vesuvio exists. 

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

export default VesuvioPost;