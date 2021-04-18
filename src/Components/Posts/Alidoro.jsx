import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import Alidoro_Sandwich from '../../Alidoro_Sandwich.jpeg'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'
import './Alidoro.css'


class AlidoroPost extends React.Component 
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
    
     <img  src={Alidoro_Sandwich}  alt='pinocchio' class='pinocchio' ></img>

     <h6 style={{fontSize:14}}> Sunday, March 14th, 2021</h6>
   <h2>Every neighborhood needs like a sandwich shop like Alidoro</h2>

   <p><a href='https://www.alidoronyc.com/' target='blank' style={{color:'blue',fontsize:16}}>Alidoro in Soho</a> serves up the kind of hearty, meaty Italian subs you could mull over for an entire afternoon — or at least through an episode of Rick of Morty, which is what I did with my Pinocchio sandwich yesterday. 

</p>
<p>The sandwich came packed heavy with soppressata layers, salty enough to suck your buds dry for the day. I assure you, the flavor is worth the dehydration! A beautiful translucent sliver of prosciutto peaked out below the slightly moist, soft slab of mozzarella, and sweet roasted peppers and olive paste completed the sandwich, which I ordered on sfilatino bread — a slightly softer version of a baguette. 

</p>
<p>Overall, the Pinocchio sandwich was a beautiful harmony of salty, sweet and meaty. My only qualm, not so much a complaint as a matter of taste, was the slightly bitter olive paste, which acted as a safety brake for my usual breakneck pace of processing sandwiches. 

 </p>
<p>	To me, olive paste feels like one of those specialty ingredients that should’ve stayed in the old world. The bitterness makes sense to cut the salt in the meat, but I prefer a more savory dressing. 

</p>

<p>Alidoro has been in business since 1986, and the wooden bookshelves full of dog-eared Italian cookbooks make clear their unstinting commitment to tradition. I’ll save requests for more oil and vinegar for the local bodegas. 

</p>
<p>With over 38 Italian sandwich options, Alidoro’s menu encourages repeat returns to try ‘em all — the sandwiches exist across a design continuum, like Yeezy colorways or the original iPods. I give Alidoro a 4 out of 5, and will definitely be ordering again. Just, you know, not a sandwich with olive paste. 


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

export default AlidoroPost;