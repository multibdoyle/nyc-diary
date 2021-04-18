import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import HeadlessWidowOyster from '../../HeadlessWidowOysters.jpeg'
import HeadlessWidowBurger from '../../HeadlessWidowBurger.jpeg'
import './HeadlessWidow.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'


class HeadlessWidowPost extends React.Component 
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
    
     <img  src={HeadlessWidowOyster}  alt='oysters' class='headlesswidowoysters' ></img>

     <h6 style={{fontSize:14}}> Sunday, April 18th, 2021</h6>
   <h2>I had way more fun with oysters and beer than pizza and ice cream</h2>

   <p>I arrived with a friend at <a href='https://www.theheadlesswidow.com/' target='blank' style={{color:'blue',fontsize: 16}}>The Headless Widow</a> yesterday right around Happy Hour, where oysters were $1 a pop — with the requirement that you order a drink with your side of bivalves. 
</p>
<p>
	I hadn’t had a sip of alcohol since 2017, for various non-dramatic reasons — religion, taste preference, a general desire to be in control of my faculties. But here I was, 5 p.m. on Saturday and famished but for that morning’s breakfast sandwich + cookie + sticky bun combo, and suddenly forced into a devil’s bargain of drinking alcohol with my noshing! 
</p>  
<p>My friend, also, was not in a drinking mood, but we were already seated in a cozy outdoor booth under the incubating glow of a heat lamp, and were resigned to see through our experience at The Headless Widow. 

 </p>
<p>As the physically larger of our duo, I felt the weight of liquid responsibility falling on my shoulders. I ordered myself a Five Boroughs ale, as well as doubling-up the oyster order and adding a burger and fries. 

</p>

<p>The Headless Widow has a hip-macabre East Village vibe that is conducive to out-there conversations and strange loop thinking. Talk at our table honed in on NFTs and blockchains, cryptocurrencies and political conspiracies; all the while, I suppressed mildly-neurotic thoughts about what might happen when I finally consumed the beer. 

</p>
<p>Would I promptly vomit all over the table? Collapse off my chair in a drunken mess? Face-plant into the ice-tray of oysters? Get struck by lightning?


</p>
<p>The food came not a moment too late, carried all in a bundle by our limber server. The oysters, plopped down at center-table, were beautifully-fresh and briny, made all the more crave-worthy with a dab of Tabasco and splash of mignonette sauce. I downed about four mollusks, paired with liberal laps of my light Five Boroughs ale, and felt that ol’ slipping of inhibitions creep in. 

</p>
<p>Beer and oysters; yeah, I could get down more often. 
</p>

<img  src={HeadlessWidowBurger}  alt='burger' class='headlesswidowburger' ></img>
<p>The burger, cooked medium, was thick, juicy and quite drippy; the bun held up admirably to the last bite. The meatiness of the sandwich was enhanced by a fat tomato ring, which packed a glutamate-heavy umami punch in its own right. The french fries were crispy, oily, thick-cut — all the qualities you would want in gastropub potatoes.

</p>
<p>Between the beer, the oysters and the burger, I felt an unfamiliar sense of dignity while dining; perhaps I should work my cheat-meals around sit-down restaurants with company more often, rather than gobbling pizzas and ice cream pints on my couch. 


</p>
<p>Great food, great service, great creepy name; The Headless Widow pushed my comfort zone slightly, but ultimately landed on a hit. The gastropub is a strong option for quality seasonal fare in the East Village, and earns a 4.25 out of 5 rating on the NYC Diary scale.
</p>

<p>It was also probably the best time I’ve ever had being forced to drink, outside of certain collegiate initiation rites; but those didn’t come with oysters. 
</p>

<p>
Until next time.    
</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default HeadlessWidowPost;