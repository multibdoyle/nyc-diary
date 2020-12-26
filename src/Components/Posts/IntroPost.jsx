import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import './IntroPost.css'
import { blue } from '@material-ui/core/colors';
import ScrollIntoView from './../ScrollIntoView/ScrollIntoView'
import LeaveaComment from './../CommentSection/LeaveaComment'
import CommentList from '../CommentSection/CommentList'
import TodosList from './../CommentSection/todos-list.component'
import CreateTodo from './../CommentSection/create-todo-component'


class IntroPost extends React.Component 
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
        <body class='article'       >
       
        <img src='https://c0.wallpaperflare.com/preview/727/197/160/fidi-oculus-world-trade-center-mall-thumbnail.jpg' alt='oculus' height='200' width='350' class='center' ></img>
   
        <h6 style={{fontSize:14}}> Sunday, June 14th, 2020</h6>
      <h2>Why I'm Here</h2>
   
      <p>It's a new dawn, it's a new day, it's a new light in New York City.</p>
      <p>The start of coronavirus came on very much like a horror movie - the news reports of far-flung disease, the rumors that we'd see disaster on our shores soon, the first New York cases in early March and the first deaths two weeks later, now over 17,000 deaths.</p>
      <p>The first week of full quarantine, after everyone at my office was 'encouraged' to work from home - and right around the first stomach-churning stock market drops - I spent a whole Friday reading neofuturist articles on Medium and listening to heady industrial house music, making myself feel some level of vibe in a nightmare. </p>
      <p>Then this past Friday, as I checked out a Citibike from a kiosk near my apartment to head uptown, with clusters of chattering, sunglass-wearing millenials crowding the sidewalks and seating of neighborhood restaurants, the sense I got was very clear: New York is not done. </p>
      <p>That job might be done, if you're one of the <a href="https://www.gillibrand.senate.gov/download/new-york-unemployment-report" target="_blank" style={{color: 'blue',fontSize:16}}> 413,800 unemployed</a> among the city's boroughs. The dream might be done - or at least on hold, if you're dream was to work on Broadway. </p>
      <p>But New York is not done. The <a href='https://theinfosphere.org/New_New_York' target="_blank" style={{color: 'blue',fontSize:16}}>New New York</a>, in fact, is likely just beginning.</p>
     <p>My general hope in this blog is to chronicle this strange, tragic, absurd and beautiful forced transformation of the world's most famous city. </p>
     <p>I'm also going to write a lot about food. Because ... why not.</p>
     <p>Love, B</p>
     <LeaveaComment></LeaveaComment>
     <CreateTodo></CreateTodo>
     <TodosList></TodosList>
      </body>
  
 
  
</div>
</ScrollIntoView>
)
}
}

export default IntroPost;