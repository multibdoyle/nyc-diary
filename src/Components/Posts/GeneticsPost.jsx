import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
//import './CookiesPost.css'

class GeneticsPost extends React.Component 
{ render() {
    return (
    <div class="row">
  <div class="leftcolumn">
    <div class="card">
        <body>
        <img src='https://www.thesun.co.uk/wp-content/uploads/2019/10/NINTCHDBPICT000530309975.jpg' alt='cookies' height='200' width='350' class='center'></img>
        </body>
      <h2>They might breed for these genes in the future</h2>
      <p>Yes, the Olympics are around the corner, and yes, there are statistically significant chemical differences between us and the athletes.</p>
      <p>Would you rather have super-speed, super-strength, or both?</p>
      <img src='https://thumbs-prod.si-cdn.com/d2F0t8RueMiSkRPIsECoAsIPXKY=/fit-in/1072x0/https://public-media.si-cdn.com/filer/Charles-Atlas-comic-3.jpg' alt='beach photo' height='200' width='350' class='center'></img>
      <h1>Keep off me you ACTN3-glutted freak! - Charles Atlas nerd, probably</h1>
    </div>
  </div>
</div>)
}
}

export default GeneticsPost;