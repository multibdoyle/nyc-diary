import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import LilFrankiesPizza from '../../LilFrankiesPizza.jpeg'
import './LilFrankies.css'

import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'


class LilFrankiesPost extends React.Component 
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
    
     <img  src={LilFrankiesPizza}  alt='lilfrankies' class='polpettine' ></img>

     <h6 style={{fontSize:14}}> Sunday, April 4th, 2021</h6>
   <h2>But it did take some work to organize those meatballs....</h2>

   <p>A <a href='https://www.youtube.com/watch?v=eE4CYUZQpY8&t=186s' target='blank' style={{color:'blue', fontsize: 16}}>stellar OneBite score</a>, <a href='https://www.theinfatuation.com/new-york/reviews/lil-frankies' target='blank' style={{color:'blue', fontsize:16}}>fawning review from The Infatuation</a> and overall ‘cool restaurant’ reputation have long drawn me to Lil’ Frankie’s in the East Village, but until yesterday, I historically had issues booking myself a meal. I attribute most of the missed connections to the fact that Lil’ Frankie’s is almost always out of pizza and only offering pastas and flatbreads when I browse their UberEats menu. 


</p>
<p>Maybe the pizza shortage is because I’m usually deep into UberEats close to midnight on Saturdays. I donno. But yesterday, popping into Lil’ Frankie’s profile around 5 p.m., I was pleased to see the ravenous hordes had not yet eaten all the Neapolitans. The time for a NYC Diary rating of Lil’ Frankie’s was nigh!

</p>  
<p> I decided swiftly on the Pizza Polpettine, which comes with mozzarella, tomatoes, baby meatballs and sage, ordered up, and went back to listening to <a href='https://pitchfork.com/reviews/albums/tha-god-fahim-your-old-droog-tha-wolf-on-wall-st/' target='blank' style={{color:'blue',fontsize:16}}> ‘Tha Wolf on Wall Street' from Tha God Fahim and Your Old Droog.</a>

 </p>
<p>Fun fact — did you know ‘Droog’ means ‘friend’ in Russian? It does! And that’s the most significant thing I learned before the pizza arrived, with a ship-time of well under 40 minutes. 
</p>

<p>So, Lil’ Frankie’s has a strong delivery game. Natch! But how was the pizza?
</p>
<p>Of course I was disappointed when I discovered my dear Polpettine pie had suffered from cheese sliding on one quadrant, and was even more bummed by the lack of cheese overall. 

</p>
<p>I get it, I get it; the chewy mozz rounds on a Neapolitan are supposed to serve as a complement to the light, airy crust, not the whole show. But darnit, I’m a cheese man! This was Saturday! I needed all the mozz. 
</p>
<p>Fortunately, what the cheese spots lacked in diameter, they made up for in depth; one bite of mozz was generally enough to chew about with multiple tears of thin, chewy crust. The crust had plenty of flop on the inside and tender air bubbles on the outer rim, including a particularly craterous semi-popped sac of char, clearly visible in the photo above. 

</p>
<p>The meatballs were hefty and, as advertised, fully mobile balls. Corralling the meatballs onto a single slice took some dexterity, but once centered, they added a pleasant savory pop to the pie. 
</p>
<p>The sauce was subtle, bordering on soupy, but nonetheless provided a proper sweet enhancement to the chewy crust. 
</p>
<p>
I would give Lil’ Frankie’s a 3.5 out of 5 — solid overall ingredients, a little shaky on cohesion, but overall, a darn good pie that I can only imagine is better in their chandelier-lit, brick-walled restaurant. 
</p>
<p>And when I do eat at Lil’ Frankie’s 1st Avenue digs, I’ll be taking up the offer to ‘double mozzarella’ my pie. <a href='https://www.multibdoyle.com/factory-tamal-takes-tortas-and-tamales-to-the-max-in-east-village' target='blank' style={{color:'blue', fontsize: 16}}>In case my last post didn’t make the point clear</a>, let me restate: the cheat code to my heart is cheese. Lots and lots of cheese. 
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

export default LilFrankiesPost;