import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'

import './DopamineHigh.css'


class DopamineHigh extends React.Component 
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
    
     <img src='https://upload.wikimedia.org/wikipedia/commons/8/87/Jaron_lanier.JPG'  alt='chef' class='center' ></img>

     <h6 style={{fontSize:14}}> Saturday, September 5th, 2020</h6>
   <h2>You Don't Need the Social Media Dopamine</h2>
   <p>
One of my more insightful friends in high school - probably the funniest in our group, and also the guy most consistently ahead of the curve for new drugs - had a memorable riff on the mood boost he’d get from a MySpace notification. 
 </p>
 <p>
 “Ooh, a new friend request! Perhaps I won’t kill myself today.”
 </p>
 <p> This was right around the time we were learning about dopamine in biology class - the ‘pleasure chemical’ that explained so many of our teenage urges for drugs, alcohol and sex. Even at the dawn of Web 2.0, before  <a href='https://www.verywellmind.com/excessive-social-media-use-4690882' target='blank' style={{color:'blue', fontSize: 16}}>studies indicated that social media sites drive behavior similar to drug addiction</a>, 16-year-old kids were considering social media as a fiendish, dopamine-laden pasttime. 
</p>
<p>Facebook, Twitter and their ilk have control not just of our data, but our dopamine, and some people would argue that we’re all victims of ‘behavioral engineering’ on these free, entirely non-essential, yet wildly popular platforms. Jaron Lanier - Microsoft Interdisciplinary Scientist, pioneer of virtual reality and renowned coinnoiseur of wacky instruments (see picture above) - recently posited in a GQ profile that social media is ‘worse than cigarettes’, because ‘cigarettes don’t degrade you. They kill you, but you’re still you.’
 </p>
<p>The narrative of calling social media an ‘addiction’ implies that, in fact, there is no optionality, not after you sign up for the platform. You can’t quit anytime you want, because you’re addicted, and so become victim to Facebook’s endless experiments to optimize engagement and maximize ad dollars - the most craven kind of behavioral engineering. And so, to Lanier’s point, you’re degraded - morally - in potentially irreversible ways. 
</p>
<p>But the media - whether newspapers, radio, movies, tv or social - was always trying to maximize dopamine levels, in one form or another, at least from an advertising perspective. Through testing, automation and algorithms, social media companies have created the most programmatically reliable media platforms for dopamine maximization in human history. And they’re reaping the benefits. 
</p>

<p>
As with all media, when certain information feeds backfire on society - the way porn backfires, or hyper-violent movies, or fake news sites - it’s all too easy to feel betrayed, or even manipulated. But I would propose that if you use social media to bolster your self-esteem and shape your values, you are destined to have your warm, fuzzy dopamine high blown up. 

</p>

<p>I wonder how the dopamine high for moral grandstanding compares to heroin?  That said - take control of your feelings, folks. Also, for more insight on this topic from a much worthier techno-philosopher than myself, check out <a href= 'https://www.gq.com/story/jaron-lanier-tech-oracle-profile' target='blank' style={{color:'blue', fontSize:16}} >check out Zach Baron's GQ profile of Jaron Lanier</a>. Worth a quick shot of informational dopamine, I promise. 

</p>
  

   </body>

</div>

</ScrollIntoView>
)
}
}

export default DopamineHigh;