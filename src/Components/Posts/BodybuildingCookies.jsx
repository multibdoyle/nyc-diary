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

   <p>Following ‘fat cookie’ companies on Instagram has become a typical 10-minute time-waster throughout my day. 
 </p>
 <p>I’ve always been a cookie fiend - this blog is labeled as ‘cookie_blog’ in my desktop code repository - but until recently I never would’ve considered having cookies shrink-wrapped and UPS-delivered to my apartment. Not when I have a bevy of bakeries and coffee shops within walking distance of my apartment. </p>
   <p>But on Instagram, this new breed of fat cookie - usually at least 4 oz., some as tall as you can stretch apart your index fingers and thumb, stuffed with a comical amount of mix-ins - has got me hopping on the e-baker bandwagon. I’ve had <a href='https://www.instagram.com/explore/tags/fatcookies/' target='blank' style={{color:'blue',fontSize:16}}>#fatcookies</a> delivered from several bakeries this year, and so far, the convenience of having a stack of cookies in my freezer, ready to heat up, has far outweighed any shipping costs. 

 </p>
   <p>
   They’re also delicious.

 </p>
   <p>Many of the bakers behind these massive cookies seem to be fitness buffs, with a skew towards bodybuilding women. Ultra-doughy cookies and fitness have long gone hand-in-hand - the founders of New York’s Levain Bakery, Constance McDonald and Pamela Weekes, concocted their 6-oz. doughbombs as bike-ride fuel while <a href='https://www.womenshealthmag.com/food/a29403937/levain-bakery-founders-ironman/' target='blank' style={{color:'blue',fontSize:16}}>training for an Ironman Triathlon.</a>
</p>
<p>In a similar vein, the founder of Bak’d Bakery - a New York pop-up which officially launched nationwide shipping this year - <a href='https://www.instagram.com/explore/tags/fatcookies/' target='blank' style={{color:'blue',fontSize:16}}>told AMNY</a> she had entered a bodybuilding competition before starting to experiment with cookies in her Lower East Side kitchen. </p>


<p>That's Bak'd Bakery's vanilla icing-filled brown butter-base 'Funhouse' cookie at the top of this post. Looks bomb, right? </p>

<p>I’ve eaten at least 8 Bak’d Bakery cookies in the past year; in an ideal world, I’d have at least 8 more before 2021. My personal favorite has been the ‘Home Alone’ -  an offering from this past winter which included a ginger molasses cookie base mixed with cinnamon chips, graham cracker pieces, white chocolate chips, and an eggnog icing stuffing.
Imagine eating that cookie as you walk up Broadway in the Financial District, snow gently falling, surrounded by Christmas lights and all the magic of the city in winter. Those are goals.</p>



<p>Also sitting in my freezer right now are some fat boys from 
<a href='https://www.instagram.com/capsule_corp_cookies/' target='blank' style={{color:'blue',fontSize:16}}>  Capsule Corp Cookies</a> 
, a Houston, Texas-based start-up whose owner, according to her Instagram feed, placed 4th in the 2019 NPC National Womens’ Physique Division. 
</p>
<p> Want more suggestions for fat cookie retailers? Check out the Instagram feed of <a href='https://www.instagram.com/cookiestuffedmuscles/' target='blank' style={{color:'blue',fontSize:16}}>@cookiestuffedmuscles</a>, a bodybuilder who moonlights as the cookie reviewer du jour for the fat cookie industry. 
</p>
<p>Lots of iron and grit to go with the butter and sugar, in the world of #fatcookies. 
</p>
  
   </body>

</div>

</ScrollIntoView>
)
}
}

export default BodybuildingCookies;