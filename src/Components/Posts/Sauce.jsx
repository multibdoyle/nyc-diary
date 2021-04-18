import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import SaucePizza from '../../SaucePizza.jpeg'
import './Sauce.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'


class SaucePost extends React.Component 
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
    
     <img  src={SaucePizza}  alt='sauceslice' class='sauceslice' ></img>

     <h6 style={{fontSize:14}}> Saturday, February 20th, 2021 </h6>
   <h2>The secret is in the sauce, you see....</h2>

<p><a href='https://www.saucepizzeria.com/' target='blank' style={{color:'blue',fontsize:16}}>Sauce Pizzeria </a>is already written in the history books for Dave Portnoy’s 9.1 review of their plain cheese slice, <a href='https://www.youtube.com/watch?v=Zn4J_ylZACs' target='blank' style={{color:'blue',fontisze:16}}>which he called “just about the best slice ... I’ve ever had.”</a>

</p>
<p>High praise coming from El Prez, and a review which — <a href='https://www.multibdoyle.com/vodka-and-hot-honey-spices-up-village-square-pizza-in-the-east-village' target='blank' style={{color:"blue" ,fontsize:16}}>unlike some of Portnoy’s other pizza opinions</a> — I can fully get behind. I’ve recommended Sauce Pizzeria to multiple friends since the Rivington Street spot opened in September 2018 — adjacent to the family-owned sit-down restaurant, also called Sauce — and they have been one of my most consistent go-tos for Saturday afternoon slices. 

 </p>
<p>Today, I picked up two of their ‘upside-down’ squares — a pepperoni and a sausage, garlic and onion slice — as well as a pepperoni slice, and sat at a table outside amidst the ice and snow.

</p>

<p>One of the unique selling propositions of Sauce — the USP, as they say among us **marketing professionals**  — is, in fact, the cups of extra pizza sauce they provide with each slice. Typically, if I ask for extra of anything on a pizza, it’ll be cheese, but the dipping sauce underscores one of the key points of excellence for Sauce, which is the crust. Chewy, slightly sweet, and, for the upside-down Silician-style slices, quite airy and redolent of sourdough, the crust makes for great dipping soldiers.
  </p> 
    
    <p>
    The ‘upside-down’ pizzas evoke the caramelized-cheesy goodness of Detroit-style pan pizzas. Sauce’s distinctly rough-cut, spicy pepperoni rounds, as well as the sundry plugs of garlic and parmesan, make for quite a zesty pie. You can just as easily tear a square slice into breadsticks to dip into the sauce as you can fold the square for chowing down into a mini pepperoni-sauce-and-cheese sandwich. 

</p>
<p>The regular pepperoni slice — the style Mr. Portnoy delivered such high ratings to — is more of a classic New York pizza, thin and slightly floppy, with the spicy pepperoni leading the flavor profile. Here, too, the extra sauce is much welcomed, although the crust is chewy and cheesy enough that you certainly don’t need anything additional to enjoy. 


</p>
    
<p>It’s just that little bit of extra love that makes Sauce special. 


</p>
<p>People of Manhattan and tourists alike, hear me now: Sauce is making pizza not just worth stopping by for when you’re in the ‘hood — it’s worth traveling for. I would give a 5 out of 5 for Sauce — and again, I acknowledge that a <a href='https://www.multibdoyle.com/dominique-ansel-is-still-a-genius-and-the-cronut-is-still-the-best-pastry-in-the-world' target='blank' style={{color:'blue', fontsize:16}}>‘perfect’ score is not too hard to come by on this blog.</a> Don’t let that take away from Sauce’s brilliance; it’s not my fault New York has such perfect food, is it? 
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

export default SaucePost;