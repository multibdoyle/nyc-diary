import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import VillageSquarePizza from '../../VillageSquarePizza.jpeg'
import './VillageSquare.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'


class VillageSquarePost extends React.Component 
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
    
     <img  src={VillageSquarePizza}  alt='vodkapizza' class='villagesquareslices' ></img>

     <h6 style={{fontSize:14}}> Saturday, January 16th, 2021</h6>
   <h2>One Bite Pizza Review got it wrong, this place is phenomenal</h2>

   <p>When Village Square Pizza opened in April 2019, Barstool Sports founder and One Bite pizza reviewer Dave Portnoy issued <a href='https://www.youtube.com/watch?v=nil3KqEx7dM&t=253s' style={{color:'blue',fontsize:16}}> probably the meanest good review I’ve ever seen</a>. Speaking on-camera to one of the Village Square co-founders, Portnoy declared he had just come back from Las Vegas and was "on a different planet … so tired … I have no feeling, I have no compassion, I have no nothin,” then took a bite of a plain cheese slice. And another. And another and another. One bite, everyone knows the rules! 


</p>
<p>After a long and funny stare-down with the co-founder, a few peremptory finger raises and several more bites, Portnoy finally came out with his verdict: 7.6 out of 10. “It’s a good, solid slice.” The disappointment from the co-founder was palpable and more than a little awkward — he took a step back, grimaced, tossed his towel over his shoulder and shook his head, saying he had been hoping for a score "in the 8’s, the high 8’s.”

</p>  
<p>Portnoy has a powerful stamp of approval in the New York pizza game, in addition to his full-time job as head of Barstool Sports, and part-time gig as <a href='https://www.bloomberg.com/news/articles/2020-06-12/barstool-sports-dave-portnoy-is-leading-an-army-of-day-traders' style={{color:'blue',fontsize:16}}>leader of the day-trader revolution</a>. Some pizzerias proudly list his One Bite scores on their windows; a score above 8 is generally considered exceptional, and less than 5% — by my tally — of Dave’s 932 reviews have ever gotten above an 8.5. 

 </p>
<p>I give Portnoy respect as an industrious, hilarious, well-seasoned pizza reviewer, but I take umbrage with his Village Square verdict. There are maybe a few factors at play with judging a new pizzeria, but ultimately, I think that a) Portnoy should have gotten a square Sicilian pepperoni slice, ideally with a squirt of Mike's Hot Honey, and b) Portnoy should not have been tired for the review. 


</p>

<p>When it comes to creative, delicious — dare I say beautiful? — Silician-style pizza, Village Square doesn’t just make a "good, solid slice," they make one of the best.


</p>
<p>My first Village Square lunch of the new year, earlier today, was as excellent as every time before, maybe even better because I took a risk and got a vodka slice. I’m always tempted by vodka slices — that beautiful pink creamy sauce is quite photogenic — but as with anything a little left-of-center, I’m a little weary of the opportunity cost of not staying with basic pepperoni. 

</p>
<p>I’m glad I took the leap into vodka-land. I can’t say this was the best vodka slice in the city, because again, I have very few points of comparison, but this was a VERY good slice. The bright, rich, spicy-sweet layer of vodka sauce was about as thick as the mozzarella; the soft, chewy Silician-style crust was perfectly capable of handling the load. I ate this pizza methodically, bite-and-chew-and-swallow-and-bite style — quite a departure from my normal style of tearing and gnashing and tearing again and almost-choking and swallowing and shoveling. I think alcohol in the sauce tends to have a maturing effect on consumption.

</p>
<p>After the vodka slice came my tried-and-true favorite, a pepperoni-and-sausage slice with a drizzle of Mike’s Hot Honey. Hot honey on pizza, also, is one of those grown-man choices you make once you discover your taste buds can handle more than just cheese, sauce and bread. The burst of sugar pairs perfectly with Village Square’s cup-and-char baby pepperoni’s. Again, the mozzarella is heavy on these slices, enough to encompass the sausage knuckles and pepperoni in robes of cheesy goodness with each bite. 

</p>
<p>Because I disagree with Dave Portnoy on his score, I’m going to play by his rules and go on a 10 point scale; Village Square Pizza deserves an 8.8 out of 10. High-quality, hot, fresh, creative, cheesy, meaty, spicy-and-sweet, Instagrammable — Village Square has all the ingredients for a new New York classic. 

</p>
<p>Village Square, don’t listen to El Prez — your pies are amazing. Keep makin’ ‘em.
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

export default VillageSquarePost;