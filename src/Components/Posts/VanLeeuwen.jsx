import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import VanLeeuwenPint from '../../VanLeeuwenPint.jpeg'
import './VanLeeuwen.css'


class VanLeeuwenPost extends React.Component 
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
    
     <img  src={VanLeeuwenPint}  alt='pint' class='pint' ></img>

     <h6 style={{fontSize:14}}> Saturday, November 28th, 2020</h6>
   <h2>I wish I knew how to quit you, oat milk ice cream</h2>

   <p>In this tragi-comic year of 2020, a lot of people have been forced to confront life's big questions — those kind of existential queries you face every 10-15 years in either case, things like <i>Why am I here?</i> and <i>What really matters in life?</i>

</p>
<p>Fortunately for me, I already knew what really mattered in life going into 2020 — the answer is always love. So rather than reinvent a set of values, I’ve begun to indulge a long-teased, slow-burning love affair with ice cream. Not until 2020 did I appreciate the deep depths of deliciousness -- not to mention comfort -- a pint of ice cream can deliver for the soul. 


</p>
<p>Integral to my <i>amour de la glace</i> is Van Leeuwen’s variety of oat milk ice creams, packaged in soft-focus millennial-nursery colors and whipped together with all the local artisanal flavors you’d expect from a Brooklyn-based, millennial-founded creamery. 

 </p>
<p>	 As a guy who has always tended towards ultra-chunky mix-ins, the Oat Milk Brown Sugar Chunk would seem to be right up my alley. Brownies, cookie dough and candied oat clusters compete for top-billing in a brown sugar oat milk base, which Van Leeuwen’s website describes as a ‘maximalist’s dream.’
</p>

<p>And plus, the whole thing’s vegan — so I can sleep a little easier knowing that I saved a cow from an aggressive, mechanized, de-bovineifying milking. Or something. 


</p>
<p>I picked up the pint straight out of the bodega freezer — thank you, private equity, for fueling <a href='https://www.foodnavigator-usa.com/Article/2018/08/06/Van-Leeuwen-Ice-Cream-closes-Series-A-round-aiming-to-take-its-pints-to-all-50-states-by-2019' target='blank' style={{color:'blue', fontSize:16}}>   Van Leeuwen’s expansion and distribution the past two years </a> — and so let it defrost for about 15 minutes before jumping in.

</p>
<p>Part of Van Leeuwen’s appeal to me — their sort of addictive quality — is the brand’s use of coconut with vegan flavors. Coconut, actually, is the first flavor that really stood out in Brown Sugar Chunk - both nutty, fatty coconut cream, as well as what tasted like chewy flakes of coconut layered throughout. Combining coconut cream with oat milk, I think, works very well as a continuance of the ‘maximalist’ theme of the ice cream. The doubling-up of alternative fats makes for a unique — dare I say sophisticated? — flavor. 
</p>
<p>My romance with ice cream, to be sure, is a sophisticated one. 
</p>
<p>Cookie dough was the second-most abundant mix-in; as usual, I got a little thrill digging out the plugs of cookie dough and popping them as stand-alone nibs. 
</p>
<p>Van Leeuwen’s oat crunch clusters make for a killer sundae topping, but the oat-crunchiness in this particular pint seemed to get lost in the rest of the ice cream’s oat flavor. Likewise, swirls of brownie were seen in the ice cream, but not tasted. 
</p>
<p>In detailing the ice cream’s flavor layers, I should probably note I started spooning in gobs of Trader Joe’s cookie butter after the first several bites. Not because the ice cream needed cookie butter flavor, any more than it needed brownie or oat-crunch flavor; I’m just a maximalist. 
</p>
<p>Van Leeuwen’s Brown Sugar Chunk continues what has been a long string of hits, following up on recent seasonal varieties I’ve tried including Pumpkin Cinnamon Roll and Bourbon Vanilla Apple Crisp. LIke those other oat milk flavors, I would give the Brown Sugar chunk a 4 out 5 — um, stars. Yes, stars; bear with me while I figure out a proper scoring system. 
</p>
<p>Is 4 out of 5 good enough to turn me permanently vegan? No. Good enough to replace that pint of Ben & Jerry’s for a go-to Saturday night couch-date — or, you know, an I-can-do-bad-all-by-myself pick-me-up? You betcha. Keep that oat-milk a-comin’, Sweden / Brooklyn!
</p>
<p>Until next time. </p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default VanLeeuwenPost;