import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import LABurdickCookie from '../../LABurdickCookie.jpeg'
import CommentForm from '../CommentSection/CommentForm.js'
import CommentList from '../CommentSection/CommentList.jsx'
import './LABurdick.css'


class LABurdickPost extends React.Component 
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
    
     <img  src={LABurdickCookie}  alt='laburdickcookie' class='laburdickcookie' ></img>

     <h6 style={{fontSize:14}}> Sunday, May 1st, 2021</h6>
   <h2>I'd fight a war for this cookie</h2>

<p> Surrounded by the chocolate bars and bon-bons in <a href='https://www.burdickchocolate.com/' target='blank' style={{color:'blue',fontsize:16}}>L.A. Burdick’s elegant Prince Street storefront</a>, one could easily overlook the glass-domed stack of chocolate chip cookies by the register. 
</p>
    <p>
    But cookie monsters, heed my call: L.A. Burdick bakes up one of the best cookies in the entire city. 

</p>
<p>The current Head Chocolatier, Michael Klug, was previously the pastry chef at several Michelin-starred restaurants, and <a href='https://www.nytimes.com/2019/11/18/dining/burdick-cookie.html' target='blank' style={{color:'blue',fontsize:16}}>unveiled the cookie recipe in November 2019.</a> I’ve so far not seen the cookie on any of the ‘best of New York’ lists, although <a href='https://www.chicagomag.com/chicago-magazine/april-2020/the-four-best-chocolate-chip-cookies/' target='blank' style={{color:'blue',fontsize: 16}}>Chicago Magazine named the Burdick Cookie as the number 1 in the Windy City. </a>

</p>
    
<p>The lack of hype, for now, is a good thing, and means I can usually count on cookies in the case no matter the time of day. 

</p>
<p>Stepping into the store this afternoon, I made a beeline for the cookie case and, additionally, picked up a chocolate-covered Guglehupf (mini bundt cake). 


</p>

    
<p>Sitting outside at a red metal tabletop, I considered that every Burdick Cookie I've had — whether fresh out of the oven in the morning or at the very end of the day — has been excellent. 


</p>
<p>My first bite, as expected, sent my eyes rolling to the back of my head. The Burdick Cookie is soft and rich, with generous sweet-bitter veins of dark chocolate and subtle, crunchy chunks of walnut. 

</p>
<p>Wars have been fought over lesser treasures than this cookie. 

</p>
<p>The Guglehupf, too, was a decadent, chocolatey delight, slightly messy but fully moist. </p>


<p>I’m predicting L.A. Burdick — long renowned for innovation in Swiss chocolate — is going to start drawing a new generation of foodie-tourists with their pastry prowess. 


</p>
<p>Just remember you heard it here first — L.A. Burdick cookies. The best. Go getcha some. 5 out of 5 stars. 
</p>
<p> Until next time. </p>


   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default LABurdickPost;