import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
import ScrollIntoView from './../ScrollIntoView/ScrollIntoView'
import './MyCouchPost.css'

class MyCouchPost extends React.Component 
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
    
     <img class='img-fluid' style={{borderRadius:12, position:'relative'}} src='https://live.staticflickr.com/4632/24894378477_25af95c2b1_b.jpg'  alt='chef' height='30%' width='30%' class='center' ></img>

     <h6 style={{fontSize:14}}> Thursday, July 30th 2020</h6>
   <h2>My Life on a 5x2 Foot Sofa</h2>

   <p>A <a href='https://content-static.upwork.com/blog/uploads/sites/6/2020/05/26131624/Upwork_EconomistReport_FWR_052020.pdf' target='blank' style={{color:'blue',fontSize:16}}>recent UpWork survey</a> found that 91% of hiring managers said the switch to remote work has gone at least as well as expected, if not better. Among the common explanations for what’s gone well: No commute (49% of responses), Reduction of non-essential meetings (46%), and Less distractions then the office (41%).
 </p>
   <p>I kind of hate how much I’ve grown accustomed to not going anywhere for work. If you were to have asked me last summer, ‘Hey, dude, what if you just worked entirely from your couch?' I would’ve scoffed - literally scoffed. I was working in one of the tallest skyscrapers in the world, just a quick 10-minute bike ride -  or 20-minute walk - from my apartment. Why would I trade the excitement of the city and skyscraper for my freakin’ couch? 
 </p>
   <p>
To be fair, I didn’t always enjoy the commute; I sometimes thought about what I would do with the extra 40-60 minutes back in my day. And some days felt like I was ricocheting all over the city - from the gym in Noho to the office in FiDi to a church event in Midtown to a voice lesson in Harlem, back home to Soho. 

 </p>
   <p>And on those days, when I was feeling pressed for time and wishing teleportation technology existed, I would take deep breaths and remind myself just how awesome my life was, having important or fun or important-and-fun events to attend all over New York City. I’d grab a cold brew and muffin from the nearest <a href='https://content-static.upwork.com/blog/uploads/sites/6/2020/05/26131624/Upwork_EconomistReport_FWR_052020.pdf' target='blank' style={{color:'blue',fontSize:16}}>Gregory’s</a> and carry on. Life was hectic but good. 
 </p>
<p>Now I work from my couch, all day every day. My co-workers buy their own six-packs and whisky bottles for our ‘happy hours’, where everyone turns on their cameras and talk the usual after-hours nonsense, from the same place they’ve sat for the past 8 hours. 
</p>
<p>I’ve begun Zooming with my friend who lives in Brooklyn; same with my voice teacher in Harlem, who just got back in the city after retreating to Pennsylvania. On Sundays I watch live-streams of my church services. 
</p>
<p>If I had to give you reasons for why I want back my Citbike commute, or why I want the offices to re-open, I’d spin homilies about how the morning bike ride got me motivated, or having an office space encouraged creativity and collaboration. But arguing for a complete ‘return to normalcy’ from remote work, to me, feels about as valid as the claims physical newspapers will never go away because ‘there’s something about the feel of the paper’ that consumers would miss. 
</p>
<p> Sure, we’ll all miss the nice, pulpy feel of physical newspapers. But turning those linear pages will never compete with the infinite wormhole possibilities of hyperlinks.
</p>
<p>I do want to go back to an office. I do want to hang out in coffee shops again, and go to plays and concerts, and be part of a physical church congregation. I want a full re-opening so we can get on the road to full employment for everyone.
</p>
<p>And brother, I can’t wait until the gyms re-open. 
</p>
<p>But I’m also hoping to figure out which parts of my ‘old life’ I really want to restart, and which parts were just busy-work and hustle-bustle that gave me self-esteem. I don’t want to keep this Zoom license forever; at a certain point I’m going to start taking the trains to see friends. Maybe I’ll bring more books? 
</p>
<p>Or maybe New York and the world are becoming something completely different and there really is no going back to ‘normal.’ Who knows? I just know I need to get off this couch, one way or another.
</p>

  
   </body>

</div>

</ScrollIntoView>
)
}
}

export default MyCouchPost;