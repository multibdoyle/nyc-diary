import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'

import './DadShoes.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'

class DadShoesPost extends React.Component 
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
    
     <img  src='https://i.pinimg.com/736x/17/ff/f4/17fff49484207924f2047e953572bdb8.jpg'  alt='migos' class='center' ></img>

     <h6 style={{fontSize:14}}> Saturday, October 11th, 2020</h6>
   <h2>I'd rather be ugly-beautiful than beautiful-beautiful</h2>

   <p>I used to live above one of those louche-chic bodegas in Nolita with endless fashion and art-style magazines lining the windows. I’d always get an eyeful of skin walking by that store, which I sometimes tried to avoid - I’m a Christian, remember! But occasionally, the lurid magazine covers would impress me with their aggressive assault on conventional taste and beauty. 
</p>
<p>One magazine, I recall, showcased a midget cover model; another gave the front page to a topless morbidly-obese woman, who was shooting the camera a truly savage glare; there were models with alternate-colored pupils, models who looked suicidal, and models with skin conditions. These models - the strange ones, just left-of-center - were the ones that I found inspiring, and made me want to lean into the ‘ugly is beautiful’ theme in my own life. 
</p>  
<p>The ‘ugly is beautiful’ motif, for a fashion dilettante like myself, seems to be especially accessible with one of the most pervasive trends of the Trump era: Dad shoes. I’m talking chunky, rubber-heeled-and-probably-white-leather sneakers that I associate, actually not with a dad, but with a granddad, or any number of older white gentlemen who might work out at the local health spa and catch a quick smoothie after a tennis match before heading off to their local upscale grocery store, circa 1995. </p>
<p>Ah, grocery stores. Ah, pre-Covid. </p>
<p>The ascent of Dad shoes as a hypebeast accessory can be traced to at least 2017, with the release of the <a href='https://www.highsnobiety.com/p/yeezy-season-5/' target='blank' style={{color:'blue', fontSize:16}} >Yeezy Wave Runner 700.</a> We can approximate that peak ‘Dad Shoe’ hype occurred in the summer of 2018, shortly after the release of <a href='https://www.highsnobiety.com/p/balenciaga-triple-s-clear-sole-release-date-price/#:~:text=The%20brand%20originally%20unveiled%20three,release%20following%20on%20June%2025.' target='blank' style={{color:'blue',fontSize: 16}}>Balenciaga’s dumbbell-heavy Triple S sneakers.</a>
</p>
<p>I myself jumped on the hype-train well after it left the station - one of my proudest moments of 2019 is when a sales associate at a downtown Manhattan shoe store said I ‘look like a guy who knows his sneakers,’ which was in the context of him explaining that I surely understood not to wear the blush Yeezy 500’s I was eyeing more than once a month, and definitely not ever outside when there was a threat of rain. 
</p>
<p>I bought the Yeezy’s, and they’re the only pair of shoes I still keep in the box. They get some play maybe every other week, and have so far avoided the rain. 
</p>
<p>Of course, if you’re going to play the fashion game, you’ve got to accept the inevitability of the fashion cycle; my blush Yeezy 500s - as beautiful and perfect as I think they are now - are likely to feel stupid and useless at some point soon. <a href='https://trends.google.com/trends/explore?date=all&geo=US&q=dad%20shoes' target='blank' style={{color:'blue', fontSize:16}}>If we use Google trends as a proxy for the Dad shoe trend</a>, we’re about halfway down the right side slope - right on the cusp beween ‘Decline’ and ‘Obsolescence.’ I’d project I can stretch out my Dad shoe-wearing until the early part of 2021, at the latest, before the things become heartbreakingly obsolete.
</p>
<p> Indeed, some have argued strongly that the Dad shoe moment has already passed, or maybe <a href='https://lithub.com/josh-gondelman-please-stop-trying-to-make-dad-shoes-cool/' target='blank' style={{color:'blue',fontSize:16}} >should pass</a> - though I’d beg to differ, judging by these <a href='https://www.mrporter.com/en-us/mens/product/moncler/shoes/high-top-sneakers/leave-no-trace-suede-and-leather-trimmed-mesh-high-top-sneakers/29012654082069694' target='blank' style={{color:'blue',fontSize:16}} >crazy-cool Moncler ‘Leave No Trace’ high-tops</a> I found on Mr. Porter the other day. Regardless, whenever I do finally put on my Yeezy’s and realize they just aren’t the mood, I’ve no problem stashing them away until the dad shoe game comes back in style, let’s say in 3-5 years.
</p>
<p>In the meantime, I’ll go out and - God willing - buy another ugly-beautiful grail, like high-waisted pants or a geometric-printed multi-colored sweater. Or, maybe, the ugly-beautiful trend will invert on itself and I’ll just end back in standard-wear staples like monochrome cotton polos and suit pants. But God, I hope not; can’t we stay ugly-beautiful forever?
</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default DadShoesPost;