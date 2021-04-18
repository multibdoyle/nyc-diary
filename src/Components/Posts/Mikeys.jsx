import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import MikeyLikesIt from '../../MikeyLikesIt.jpg'
import './Mikeys.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'

class MikeysPost extends React.Component 
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
    
     <img  src={MikeyLikesIt}  alt='waffle' class='waffle' ></img>

     <h6 style={{fontSize:14}}> Saturday, February 27th, 2021</h6>
   <h2>We all love what Mikey Cole likes</h2>

   <p>Serving food with love is one of Michael ‘Mikey’ Cole’s prerogatives. He told me so himself, one snowy evening in 2017, when I ordered a hot chocolate with ice cream at his Alphabet City institution, <a href='https://mikeylikesiticecream.com/' target='blank' style={{color:'blue', fontsize:16}}>Mikey Likes it</a>, and received a cup nearly overflowing with bubbling chocolate. He lightheartedly ribbed the server for the overfull cup, before reassuring me that I got the ‘extra love.’ 

</p>
<p>That hot chocolate was, bar none, the best hot chocolate I’ve ever had in my life. 

</p>
<p><a href='https://www.amny.com/news/man-behind-mikey-likes-it-ice-cream-continues-to-give-back-to-new-york-city-community/' target='blank' style={{color:'blue',fontsize:16}}>Mikey recently told amNY how his beloved aunt taught him to ‘put love into it,’</a> years before he pivoted a vanilla ice cream recipe from one of her cookbooks into his signature ‘Ice Ice Baby’ flavor. Even when he was forced to temporarily shutter both his Alphabet City and Harlem storefronts in 2020, he continued to spread the love by hand-delivering pints of ice cream himself across Manhattan, as well as helping lead the distribution of 400 turkeys and 300 coats during Thanksgiving and Christmas.

 </p>
<p>	 The storefronts are back open now — replete with celebrity-adorned clockfaces — and, I can attest, the Mikey love is still going very, very strong. 

</p>

<p>Today I stopped into the East Village location and ordered a black-and-white Mac Daddy — a.k.a. a whole waffle ice cream sandwich with two scoops of ice cream, covered in chocolate syrup. 
</p>
<p>Selecting from a medley of hip-hop and pop culture-inspired flavors, I chose the Brady Bunch — a banana pudding-based ice cream with Vienna fingers and vanilla wafers — and the Truffle Shuffle — a chocolate ice cream with chocolate chips and chocolate-covered marshmallows


</p>
<p>A large Australian family was in the tiny storefront as well, and I was able to wait by the door while the little kiwi kids excitedly chatted through the decadent flavor options. Love was in the air, ya’all. 

</p>
<p>Despite his national presence, Mikey’s food is still essentially homemade; I watched my waffle get cooked up in a classic waffle iron behind the counter, and they use Hershey's chocolate syrup. 

</p>
<p>	The waffle was fluffy and tender, with enough heft to hold up to the heavy ice cream scoops, but enough flake to pull apart and mix in with the ice cream. 
</p>
<p>Between the two flavors, I preferred the Brady Bunch — stuffed with bready Vienna Fingers and a redolent with strong, sweet banana flavor which paired excellent with the waffle. Of course the Truffle Shuffle was good — I mean, Mikey Likes It, doesn’t he? — but it had more of a conservative chocolate ice cream vibe, with a few chewy-chocolate marshmallows throughout. 

</p>
<p>Personally, I prefer the flavors with extra love, just like Mikey told me so many years ago on that snowy night. 

</p>
<p>Love brought Mikey through the pandemic, and I do believe love will keep the man going. At the risk of pushing the schmaltz of this post to overflow, I’d just like to submit that Mikey is living out <a href='http://web.mit.edu/jywang/www/cef/Bible/NIV/NIV_Bible/1COR+13.html#:~:text=1%20Corinthians%2013%201&text=If%20I%20give%20all%20I,keeps%20no%20record%20of%20wrongs.' target='blank' style={{color:'blue',fontsizse: 16}}>1 Corinthians 13:1</a> in a way that everyone could look up to. 
</p>
<p>Not that the guy hasn’t got his due respect; <a href='https://www.newsweek.com/rap-snacks-inside-hip-hop-restaurant-boom-381280' style={{color:'blue',fontsize: 16}}>he’s done ice cream collabs with both Future and Jay-Z.</a> Now THAT’S love from the culture. And, I'm going to give him a bit of New York City Diary love as well - 4.5 out of 5 for the Mac Daddy. Inarguably, this is the best waffle ice cream sandwich you can get in downtown Manhattan.
</p>
<p>Until next time.</p>

   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default MikeysPost;