import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import PopsBurgerandFries from '../../PopsBurgerandFries.jpeg'
import './PopsEatRite.css'


class PopsEatRitePost extends React.Component 
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
    
     <img  src={PopsBurgerandFries}  alt='popsburger' class='popsburger' ></img>

     <h6 style={{fontSize:14}}> Saturday, January 23rd, 2021 </h6>
   <h2>Just a good ol' fashioned genetically engineered soy burger with carrot-and-tomato cheese sauce...</h2>

<p><a href='https://www.popseatrite.com/' target='blank' style={{color:'blue',fontsize:16 }}>Pops Eat-Rite is a new school burger joint following an old school template</a>. Their core specialty — smashed-and-griddled plant-based burgers — is set in the tradition of a fast-casual joint like McDonalds or In-N-Out, with the sort of primary-colored and bold-lined aesthetic that could only come about from a fast food spot born on St. Mark’s Place. 


</p>
<p>
Endless Hospitality Group opened up Pops as <a href='https://ny.eater.com/2020/9/14/21420024/pops-eat-rite-opening-endless-hospitality-group' target='blank' style={{color:'blue',fontsize:16}}> a takeout-and-delivery storefront in September of last year </a>, a quick strategy pivot which helped them hire back staff furloughed from their other neighborhood spots including The Wayland and Goodnight Sonny. According to the cashier I talked today, business ‘has been great;’ Pops’ inside space, of course currently off-limits for seating, looks looks decently expansive, the type of joint which could function both as a casual, off-kilter date spot or a place to stop in to meet with friends before taking a stroll through Tompkins Square. I look forward to seeing how Endless Hospitality makes use of the space once COVID restrictions are lifted. 

 </p>
<p>	Pops has a concise food menu - just two regular burger options and a choice between kale and french fries for a side, with rotating burger and side-dish specials as well as donuts,  ice cream and milkshakes for dessert. I was intrigued by today’s special burger, the Poppa Kahn - a sort of South Pacific-inspired sandwich with soy BBQ glaze, cucumbers, pickled onions, vegan mayo and sesame seeds. 

</p>

<p>But, today being a cheat day, I needed a helping of cheese - or ‘cheese,’ as you may call Pops’ soy-based vegan cheese. So I ordered up a double Classic burger - which includes pickles, caramelized onions and ketchup in addition to the vegan American cheese - and added a side of vegan cheese fries. 


  </p> 
    
    <p>
    Off I trekked through the East Village, my greasy delicious bag of not-quite-burger-and-fries heavy in hand, looking for a place to sit and eat. I ended up at The Coffee Project on East 5th Street, and picked up a pumpkin spice muffin before setting myself into one of their two outdoor seats. 

</p>
<p>The burger, still piping hot from the tin foil wrapping, was a well-stacked and pressed beauty of a sandwich, with melted cheese and amber caramelized onions peeking out from under a fluffy toasted bun. Assessing this picture now, I will say there is a certain plant-y look to the whole scene, what with the fresh shaved lettuce and -- is that a whole-grain bun? 


</p>
    
<p>You do wonder if Pops Eat-Rite could potentially brand itself as a health-conscious joint; I was also told that the vegan cheese sauce for the french fries was made from carrots and tomatoes. And to think, I was eating all this on my cheat day!


</p>
<p>But, getting into the actual taste, I certainly didn’t feel like I was being tricked into eating veggies. Impossible Burgers, as it happens, don’t claim to be a healthy alternative to beef, just an alternative, and biting into this genetically engineered, heme-laced soy patty was, <a href='https://www.foodandwine.com/news/meatless-burger-david-chang-momofuku' target='blank' style={{color:'blue', fontsize: 16}}>to crib a phrase from chef David Chang, ‘an umami bomb.’ </a>

</p>

<p>A griddled Impossible patty, I’ve noticed, tends to develop a certain crispy shell, not entirely comparable to an animal-based patty, but delicious in its own right. The tang of the pickles and the sugary-grease of the caramelized onions mixed just right with the cheese; I think I’ll find myself craving this burger on future Saturdays. 

</p>

<p>
The french fries were perfectly done, crispy shoestring facsimiles of McDonald’s fries which tasted better by the handful. And that cheese sauce - I’m not sure how much of the sauce was composed of carrots and tomatoes, but it did taste lighter than your typical nacho dip. In fact, as far as cheat meals go, the whole Pops Eat-Rite shebang left me feeling easy and breezy after. I felt like I could’ve gone for a training run and a Crossfit workout later, had I not proceeded to munch into the Pumpkin Spice Muffin from The Coffee Project. The muffin put me out for the day; all I’ve been good for since then is phone chats and keyboard tapping. 

</p>
<p>I’ve said before that I’m a hard sell for vegan products, but Pops Eat-Rite at least has got me on the segment of consumers who would eat a vegan meal for its own delicious merits, rather than any particular moral standard against eating animals. 

</p>
<p>Sticking with the ol’ five-point scale, I’d give Pops a 4.5 out of 5 - fast, fresh and focused on fundamentals - and hope to make this joint a part of my regular Saturday restaurant rotation. Just put cheese on those special burgers, Pops! Your man needs his cheese.


</p>



<p>Until next time.</p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default PopsEatRitePost;