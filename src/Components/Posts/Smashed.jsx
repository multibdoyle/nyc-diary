import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import SmashedMac from '../../SmashedMac.jpeg'
import CommentForm from '../CommentSection/CommentForm.js'
import CommentList from '../CommentSection/CommentList.jsx'
import './Smashed.css'


class SmashedPost extends React.Component 
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
    
     <img  src={SmashedMac}  alt='bigshmacc' class='bigschmacc' ></img>

     <h6 style={{fontSize:14}}> Sunday, May 8th, 2021</h6>
   <h2>I had a double cheeseburger lunch times 2, and felt great!</h2>

<p> <a href='https://smashednyc.com/menu1/' target='blank' style={{color:'blue',fontsize: 16}}>Smashed</a>, a hip new Lower East Side burger joint, is dishing out ultra-thin, crispy patties that feel about as true to <a href='https://www.lthforum.com/bb/viewtopic.php?t=42259' target='blank' style={{color:'blue',fontsize: 16}} >the original midwest smashburger form as you can get.</a> 

</p>
    <p>
    The menu is almost entirely burger-focused — with single, double and triple patty smashes, Impossible meat options and a trio of signature burgers. I went for a double-smash for my first go-round this afternoon, and opted out of the beef fat fries — which are supposedly excellent —  with the intuition that I may want to save room for more burger. 


</p>
<p>The double-smash came out to the patio in about five minutes, a compact handheld dynamo of a sandwich. The American cheese and ‘Smash sauce’, peeking over lacey, crispy beef, melded the whole composition into a caramelized masterpiece. Fireworks went off in my taste buds with every chew. 

</p>
    
<p>I was back at the register mere seconds after my last bite, craving another smashburger. My next pick-up was The Big Shmacc (pictured above), which looked mildly intimidating upon arrival — two patties separated by an extra poppyseed bun, stacked on top of an abundance of cheese and lettuce. 

</p>
<p>I proceeded with caution, worried I had ordered more than I could handle. But after the first cheesy bite, full of special sauce, pickle and umami-crusted beef, I threw all inhibitions to the wind. The Shmacc was vanquished within minutes. 



</p>

    
<p>Did I still have room for <a href='https://www.multibdoyle.com/zazzys-pizza-and-puppy-dogs-are-a-dangerous-mix' target='blank' style={{color:'blue',fontsize: 16}}>a slice of pepperoni pizza from Zazzy’s</a> after? Maybe. But that’s what happens when you skip fries — you save more room for the good stuff. 



</p>
<p>
I give Smashed five out of five stars — probably the best burgers I’ve had all year, and I’d predict, soon to be one of the Lower East Side’s most popular lunch options as hot vax summer gets underway.
</p>
<p>Until next time. 

</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default SmashedPost;