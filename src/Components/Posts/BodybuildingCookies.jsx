import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import './BodybuildingCookies.css'
import InstagramEmbed from 'react-instagram-embed'
class BodybuildingCookies extends React.Component 
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
    <div align='center'> 
 <InstagramEmbed
  url='https://www.instagram.com/p/CEHhdVEHExU/'
  maxWidth={320}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}

   ></InstagramEmbed>
</div>

     <h6 style={{fontSize:14}}> Saturday, August 22nd, 2020</h6>
   <h2>Bodybuilders be Lovin' Thicc Cookies on Instagram</h2>

   </body>

</div>

</ScrollIntoView>
)
}
}

export default BodybuildingCookies;