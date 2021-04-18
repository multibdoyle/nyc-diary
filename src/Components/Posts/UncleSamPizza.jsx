import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import UncleSamsSlices from '../../UncleSamsSlices.jpg'
import './UncleSamPizza.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'

class UncleSamPizzaPost extends React.Component 
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
    
     <img  src={UncleSamsSlices}  alt='pizza' class='notcenter' ></img>

     <h6 style={{fontSize:14}}> Saturday, October 24th, 2020</h6>
   <h2>There's a new spicy pepperoni square in the Lower East Side</h2>

   <p>I’m not sure it’s possible to open a pizza shop in Manhattan right now without offering a rendition of a square Sicilian slice with pepperoni. The madness that <a href='https://thecounter.org/new-york-city-prince-street-pizza-lawsuit/' target='blank' style={{color:'blue',fontSize: 16}}>Prince Street Pizza started</a> has got everybody trying to make their own Spicy Spring. I’m not mad at it - in fact, for my money, there are a few shops that do a ‘Gram worth baby ‘roni-loaded ‘za slice better than Prince Street. 

</p>
<p>One of them is Uncle Sam’s Pizza, recently opened on Clinton Street. 

</p>  
<p>The name and iconography of the restaurant struck me as quite random - what I am supposed to expect from an Uncle Sam’s Pizza? Red, white and blue slices? Sparklers in my garlic knots? Really, this place is a classic New York City pizza shop, a brick-lined wedge-space on Clinton Street about the width of my bedroom, with a big ol’ iron pizza oven and a variety of round and square pies showcased behind glass. 
 </p>
<p>I was right away impressed by the sausage knuckles on their pepperoni-and-sausage slice - per the photo above, them things was PHAT. And of course, their spicy pepperoni square slice caught my eye, because, well, it’s a downtown Manhattan thing. Naturally, I had to see how their ‘roni square stacked up against the King Kong on Prince Street. I ordered the pepperoni-and-sausage and the spicy pepperoni square, and took a seat at their single outdoor countertop. 
</p>

<p>The pepperoni-and-sausage slice was great - a little crisp, but with enough give and grease in the crust to stand up to the hefty cuts of meat. I scarfed it down in t-minus three minutes, making sure to hide my savagery from passerby. Just a guy eating pizza like a dog at his last meal, nothing to see here….
</p>
<p>Then came the Spicy Pepperoni Square, piled high with ‘ronis; I mean, there were little red grease cups falling all over the place. I gave the square a relatively clean fold, treating it more like a mozzarella and pepperoni sandwich. Each bite had a good proportion of cheese, sauce, and ‘roni - an important aspect in a pizza that could easily be overpowered by the meat. I definitely tasted a kick of spice, that kind of low-fi red pepper heat that makes for an entertaining chew. 

</p>
<p>I give Uncle Sam’s a 4 out of 5 - um - let's say stars, and will definitely be going back. These guys are new, but if they keep slinging out quality pies like I had today then I could definitely see them making some year-end <a href='https://www.thedailymeal.com/best-food-drink-new-york-gallery' target='blank' style={{color:'blue',fontSize: 16}}>Best of…’ lists.</a> Plus, I’ve got to give props for keeping the dream alive in the Lower East Side, in a time where the easiest thing for most restaurateurs to do is shut their doors. It takes balls to open a pizza shop right now; mozzarella balls. **Chuckle chuckle** Know what I’m sayin’? Until next time. 
</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default UncleSamPizzaPost;