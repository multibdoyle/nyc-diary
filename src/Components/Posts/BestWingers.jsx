import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import CommentSection from '../CommentSection/CommentSection'
import './BestWingers.css'


class BestWingersPost extends React.Component 
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
    
     <img  src='https://i.pinimg.com/originals/f3/63/48/f363480a83ab0bb605e90d1d9f9e8beb.jpg'  alt='flanders' class='center' ></img>

     <h6 style={{fontSize:14}}> Sunday, October 18th, 2020</h6>
   <h2>If you're gonna get wings, don't be basic</h2>

   <p>I’ve recently found myself in a rut. Been listening to the same hip-hop songs over and over. Eating at the same pizza joints. Using the same metaphors. Running the same code. Just going through the motions, get my drift? 
</p>
<p>Predictability can be comforting - it’s why tourists travel to New York and hit up Starbucks for coffee and McDonalds for lunch, rather than dip their toes (and tongues) into one of the city’s more esoteric eateries. 

</p>  

   </body>

</div>

</ScrollIntoView>
)
}
}

export default BestWingersPost;