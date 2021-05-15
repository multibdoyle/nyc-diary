import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import SweetRehabEclair from '../../SweetRehabEclair.jpeg'
import SweetRehabCookie from '../../SweetRehabCookie.jpeg'
import CommentForm from '../CommentSection/CommentForm.js'
import CommentList from '../CommentSection/CommentList.jsx'
import './SweetRehab.css'


class SweetRehabPost extends React.Component 
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
    
     <img  src={SweetRehabEclair}  alt='pint' class='sweetrehabeclair' ></img>

     <h6 style={{fontSize:14}}> Saturday, March 15th, 2021</h6>
   <h2>They tried to make go to rehab, I said, YES YES YES </h2>

   <p>I live right above <a href='https://www.instagram.com/sweetrehabny/?hl=en' target='blank' style={{color:'blue' ,fontsize: 16}}>Sweet Rehab</a> — a Sullivan Street storefront with imported Parisian furniture and a distinctive honeybee logo — and am greeted with the smell of toasting butter and sugar whenever I walk into the apartment lobby. Yes, I am blessed. 
</p>
<p>
But even as a neighbor, I only step into Sweet Rehab about once every few months. The pastries are sculpted and multi-layer design pieces; master baker David Zaquine — the son of a chocolatier and a fashion designer — <a href='https://www.galeriemagazine.com/sweet-rehab-new-york/' target='blank' style={{color:'blue',fontsize:16}}>says his inspiration “mostly comes from fashion.” </a>



</p>
<p>Just like high-fashion, the artistic experience is as important as the actual consumption; most desserts here are constructed on the spot. Locally-sourced fruits, honey and nuts feature heavily on the menu. 

 </p>
<p>	 And every single item I've had here has tasted — what’s the French word? — <i>magnifique.</i>

</p>

<p>Today, for no particular reason other than the weather was beautiful and I had actually finished my Central Park run, I decided to start the morning off with some Sweet Rehab luxury.


</p>
<p>I already knew part of my order would include the Caramel Dulce de Leche cookie. I’m not even sure this cookie is comparable to others in downtown Manhattan — and <a href='https://www.multibdoyle.com/la-burdick-makes-one-of-the-best-cookies-in-the-city' target='blank' style={{color:'blue', fontsize: 16}}>there</a><a href='https://www.multibdoyle.com/dominique-ansel-is-still-a-genius-and-the-cronut-is-still-the-best-pastry-in-the-world' target='blank' style={{color:'blue',fontsize: 16}}> are</a><a href='https://www.multibdoyle.com/pasticceria-rocco-cookies-and-cheesecake-are-a-deadly-combination' target='blank' style={{color:'blue',fontsize: 16}}> plenty</a> — because, for about $12, you’re not getting just a cookie. The full dessert comes dolloped with pouffes of sweet cream, a shower of crushed walnuts and hazelnuts, (I think) cacao nibs, and generous squirts of caramel sauce. 

</p>

<img  src={SweetRehabCookie}  alt='pint' class='sweetrehabcookie' ></img>

<p>Eye-rolling; moaning; time-freezing; all these are common psycho-physical and temporal effects as you dig into the cookie. The buttery crunch of nuts gives way to pure cream and chocolate-laced dough, making for an experience that you’ll want to stretch out, licking each fingertip, rolling each bite in your mouth for full mouth-feel.

</p>
<p>I also treated myself to a vanilla eclair, studded with bits of shortbread cookies (I believe the fancy French equivalent of Nilla wafers.) The cigar-shaped pastry was generously stuffed from end-to-end with rich Tahitian vanilla cream. The slightly crusty dough was thin but firm, holding together a perfectly sized, refreshing follow-up to the decadent cookie.

</p>
<p>Sweet Rehab, needless to say, gets a 5 out of 5. I can’t believe I live above this parthenon of pastry excellence. 

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

export default SweetRehabPost;