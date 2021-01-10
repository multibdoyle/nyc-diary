import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import HoleyCream from '../../HoleyCream.jpeg'
import './HoleyCream.css'



class HoleyCreamPost extends React.Component 
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
    
     <img  src={HoleyCream}  alt='holeycream' class='holeycream' ></img>

     <h6 style={{fontSize:14}}> Saturday, January 9th, 2021 </h6>
   <h2>Over 5,400 different options...gotta try 'em all!</h2>

   <p>Ordering desserts for delivery can be anxiety-inducing — only a few bakeries in Manhattan deliver during late-night ‘stoner’ hours (not that I *ahem* dabble anymore), and I’m constantly forced to ask myself questions like, 'Does this $6 slice of cake I’m craving really justify the $7.78 service fee?'


</p>
<p>So in between the dual stresses of beating the Uber Eats small order fee while also not consuming so much sugar you go to bed wheezing, in comes <a href='https://www.holeycreamnewyorkny.com/' target='blank' style={{color:'blue',fontsize:16}}>Holey Cream</a> — a 3rd Avenue storefront that serves up, among other things, a very hefty donut ice cream sandwich for $8.75 (plus $0.95 for extra toppings). 

</p>  
<p>As far as variety goes, Holey Cream has got flavor permutations out the wazoo — I had to throw their menu list into a spreadsheet to do the talley, and I’m seeing 47 ice cream flavors, 29 topping options, and 4 donut types. That’s *cue fifth grade math skills* 5,452 possible combinations for a donut ice cream sandwich! Oh, the wonders of capitalism. 

 </p>
<p>If Holey Moley had a loyalty program, I’d definitely be a member — this little ice cream shoppe very well might be my most-ordered option on Uber Eats — but my tastes usually hedge between the Cookies and Cream / Cookie Dough and mass-market candy topping options. And a vanilla donut. Always vanilla. 



</p>

<p>One recent night, I decided to push the ol' comfort zone a bit by trying Midnight Cookies and Cream —  perhaps different than regular Cookies and Cream! — with a vanilla donut and Heath Bar topping. Consistent with prior experiences, my goods arrived quick, and very cold, with a little crust of ice covering the donut.

</p>
<p>Holey Cream’s donuts, if I’m being honest, are not great; they possess a sort of white-bready quality, and are just a tad too light and crumbly to pass muster as a satisfying dessert on their own. These are really frosted vehicles for the ice cream, which to Holey Cream’s credit, is served up heavy. I’d estimate each donut is stuffed with close to half of a pint’s worth of the cold stuff. 

</p>
<p>Midnight Cookies and Cream has a chocolate base; looking back, I’m not sure what I expected the ‘Midnight’ to signify about the ice cream. Maybe some kind of fudge swirl? Or just, you know, regular cookies and cream? I like chocolate <i>in</i> ice cream, but something about chocolate ice cream itself has rarely piqued my appetite; the flavor just doesn’t taste like chocolate. 

</p>
<p>All qualms with chocolate ice cream aside, these were tasty scoops, with plenty of crunch and cookie in the mix. Paired with that familiar chocolately-toffee Heath Bar topping, I had myself a lovely movie snack. 

</p>
<p>Holey Moley’s donut ice cream sandwiches are always greater than the sum of their parts, and this one was no different. You take a mediocre donut, stack on some fresh ice cream, sprinkle in convenience-store grade candy bits, and **voila** Instant cheat-night deliciousness. I give Holey Moley a 3 out of 5, and yes, I will be there ordering from there again. They’re reliable, they’re tasty, and they’re...donut ice cream sandwiches. 
</p>
<p>Until next time. </p>

   </body>

</div>

</ScrollIntoView>
)
}
}

export default HoleyCreamPost;