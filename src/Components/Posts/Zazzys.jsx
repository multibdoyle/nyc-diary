import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import ZazzysPizza from '../../ZazzysPizza.jpeg'
import './Zazzys.css'


class ZazzysPost extends React.Component 
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
    
     <img  src={ZazzysPizza}  alt='zazzys' class='zazzys' ></img>

     <h6 style={{fontSize:14}}> Saturday, February 13th, 2021 </h6>
   <h2>On Valentine's Day weekend, the greatest love stories are expressed through pizza</h2>

<p>Zazzy’s is a three-month-old, mood-lit corner spot on Stanton & Orchard with mugshot-art of supermodels on the walls and beautiful pizzas behind glass at the counter. 

</p>
<p>No, this isn’t a frozen-state blog post from 2017; Zazzy’s <a href='https://www.boweryboogie.com/2020/08/zazzys-pizza-sets-september-opening-in-former-rosarios-on-orchard-street/' target='blank' style={{color:'blue',fontsize:16}}>soft-opened in November 2020</a> —
 billing itself as a vegan / health-conscious option — and has officially made it through NYC’s winter indoor-dining lockdown to see Valentine’s Day weekend, and the reopening of indoor dining. 

 </p>
<p>	Pizza, <a href='https://www.multibdoyle.com/vodka-and-hot-honey-spices-up-village-square-pizza-in-the-east-village' target='blank' style={{color:'blue', fontsize:16}}>as they say, is pandemic-proof.</a>

</p>

<p>Sprigs of basil and conservative chessboard-patterns of mozzarella give Zazzy’s pies an upscale feel. The friendly cashier walked me through their variety —  white pies topped with bon-bons of ricotta cheese, pepperoni pies with those lovely cup-and-char ‘ronis, tomato pies baked with quartered cherry tomatoes and a minimal dusting of parmesan — this is an elevated by-the-slice joint, to be sure. Zazzy’s even has their own line of “smart sodas,” which range from vitamin-infused tea to actual cola. 


  </p> 
    
    <p>
    I ordered a pepperoni slice and a slice of the subtly-orange vodka pie; while waiting for my food, a squeaking noise persisted from under the table in front of me. This turned out to come from a fluffy doodle puppy, which was being considered for petting by a small child at the table. 


</p>
<p>The cashier came out from behind the counter at one point and gave the friendly reassurance that the doodle was, in fact, harmless, despite its urgent squeaks; the child and the puppy proceeded to bond. My pizza was ready from the oven shortly after. 


</p>
    
<p>Zazzy’s has a crispy crust, with just enough tenderness to fold in half; the ‘roni cups on the pepperoni slice were appropriately stacked throughout — you want ‘roni cups to be on top of, around and slid between one another in a good cup-and-char slice — and despite some initial misgivings I had about what looked like minimal cheese, the slice had plenty of melt. 


</p>
<p>The sauce in the vodka slice was subtle — a far cry from some of the cream-drenched vodka squares you’ll find in this city — and predominantly served as a background actor for the crispy crust and fresh mozzarella. 


</p>

<p>	Both slices were very good; what made me really enjoy Zazzy’s pizza was Mike’s Hot Honey, the chili-infused nectar of Brooklyn. Several bottles of the stuff stood ready for squirting on a side-counter, alongside the napkin dispenser and the red pepper-shaker. I squeezed out a syrupy zig-zag on the back half of my pepperoni slice, and proceeded to squirt-and-bite down through the end of the crust for both slices. 

</p>
<p>Zazzy’s gets a 4 out of 5; this is very good pizza, with or without hot honey, and I think the menu’s breadth of interesting options warrants additional investigation. 
</p>

<p>That said, I’m not sure if the puppy was there to make **very serious reviewers** like myself up their scores, but rest assured — no part of my review was swayed by the baby doodle. I take my craft seriously. I’m an artist. Just like Zazzy’s pizza chefs. But, like, for blogs. 
</p>

<p>Until next time.</p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default ZazzysPost;