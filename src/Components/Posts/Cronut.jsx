import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import cronut_and_croissant from '../../cronut_and_croissant.jpeg'
import split_cronut from '../../split_cronut.jpeg'
import './Cronut.css'



class CronutPost extends React.Component 
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
    
     <img  src={cronut_and_croissant}  alt='cronut_and_croissant' class='cronut_and_croissant' ></img>

     <h6 style={{fontSize:14}}> Saturday, January 30th, 2021</h6>
   <h2>Feed me cronuts and call me pretty </h2>

   <p>I got a cronut this morning at Dominique Ansel’s bakery on Spring Street. 

</p>
<p>Okay, that’s not all I got — my baseline order at Dominique’s always includes a ham-and-cheese croissant, a chocolate chunk cookie, and a latté. And today the cashier threw in a free canelé because, I donno, I guess I’m a regular, she knows me as the guy who comes in post-gym every few weeks and buys out the pastry case. 


</p>
<p>I scarfed both the cookie and the canelé standing up by my kitchen counter, taking furtive sips of the latté between bites. Dominique Ansel’s cookie deserves its own blog post, or maybe like a gold ‘best-in-show’ prize; this is one of the best chocolate chip cookies you can get anywhere. 

 </p>

<p>But because I ate the cookie before taking a picture, let’s talk about the cronut. Yeah, that dark amber, sugar-coated, marzipan-frosted pastry in the foreground. </p>

<p>This invention of Dominique Ansel’s <a href='https://www.eater.com/2014/5/12/6226153/dominique-ansel-on-one-year-of-cronut-mania' style={{color:'blue' ,fontsize: 16}}>caused a literal frenzy when brought to market in 2013</a>, and has since become a staple of bakeries around the world. 

</p>

<img  src={split_cronut}  alt='splitcronut' class='splitcronut' ></img>

<p>
The genius of the cronut, I always thought, was in the filling. The flaky croissant layers are a perfect medium to hold creams, jams, and whatever other wackiness Dominique has up his sleeve. If we ever have to communicate with aliens to convey our intelligence and worth as a species, I’d recommend we send up a picture of a cross-section of a cronut, <a href='https://www.instagram.com/dominiqueansel/?hl=en' target='blank' style={{color:'blue', fontsize:16}}> as pulled from Dominique’s Instagram page.</a> 


</p>
<p>January’s cronut of the month is Pistachio Cherry; as soon as I saw the rows of cronuts behind the glass, I almost felt required to get one. Even in the midst of the 'rona restrictions, Dominique’s batches of cronuts usually seem to sell out by mid-morning. 

</p>
<p>The cronut is a hardy, dense pastry. My attempt to cleanly tear it in two for a shot of the interior felt more like a tug of war, and resulted in a ganache and jam explosion. Clearly I should have used a knife. 

</p>
<p>Even with my ham-fisted attempt at food photography, the Pistachio Cherry cronut maintained an inherent beauty; I took my first bite tenderly, with a bit of reverence. Ah, the work of a master baker! Soft-flaky pillows of croissant-dough laced with tart cherry and a subtle pistachio cream, coated with a liberal spectacle of granulated sugar — dare I admit that eating the cronut made my eyes roll to the back of my head?  

</p>
<p>The marzipan frosting gave the pastry a slick, sweet finish; cherry-and-cream was the dominant flavor profile, ideal for a breakfast pastry. Finishing up the cronut, I was compelled to sit back on my couch and ruminate; if I ever get half as good at anything as Dominique Ansel is at baking, I'll be able to say I’ve lived a successful life. 
</p>

<p>So, the cronut was a perfect 5 out of 5. And yes, I realize I’ve handed out <a href='https://www.multibdoyle.com/rubirosa-pizza-delivered-a-very-merry-christmas' style={{color:'blue', fontsize: 16}}>so many near-perfect and perfect scores on this blog</a> that my little rating system has become essentially pointless. I guess I’m more of a food cheerleader than a food critic. 
</p>
<p><i>Rah rah Dominique Ansel! Keep making cronuts! They’re mind-blowing!</i>
</p>
<p>Until next time. 
</p>


  
   </body>

</div>

</ScrollIntoView>
)
}
}

export default CronutPost;