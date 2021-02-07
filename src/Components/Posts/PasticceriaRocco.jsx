import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import RoccoCookiesandCheesecake from '../../RoccoCookiesandCheesecake.jpeg'
import './PasticceriaRocco.css'


class PasticceriaRoccoPost extends React.Component 
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
    
     <img  src={RoccoCookiesandCheesecake}  alt='pasticceria' class='pasticceria' ></img>

     <h6 style={{fontSize:14}}> Saturday, February 6th, 2021 </h6>
   <h2>You're walking on hallowed baking grounds when you go to Pasticceria Rocco</h2>

<p>Italian immigrant Rocco Generoso, Sr. officially opened <a href='https://pasticceriarocco.com/' target='blank' style={{color:'blue',fontsize:16}}>  Pasticceria Rocco</a> in 1974, after buying the storefront from the bakery where he had worked the prior 18 years. Today, Pasticceria Rocco maintains one of the most diverse collections of pastries anywhere in the city. Whether you’re in the mood for cheesecake, or layer cake, or cannolis, or tiramisu, or croissants, or fruit pies, or lobster tails, or **bum bum bum** extra-large soft cookies….. Pasticceria Rocco has got you covered. 

</p>
<p>I took a walk down Bleecker Street to pick up some Saturday night treats from the bakery earlier this evening. Really, I already knew what I was going to get — their M&M cookies are like a big, easy, soft weighted blanket for my stomach. I doubt these cookies were part of Papa Rocco’s original old-world recipe index, but the bakery seems to be aware they’re an attention-getter. The extra-large cookies line the windows of the bakery every morning, stacked up like so many doughy dinner plates, beckoning downtown denizens to break their weekday diets for a taste of sugary Italian heaven. 

 </p>
<p>	I also picked up a slice of Oreo cheesecake; to tell the truth, I didn’t know Pasticceria Rocco sold cheesecake before tonight. Their selection stretches across multiple display windows and racks behind the counter, so processing all the options can take time. 

</p>

<p>I took the scenic route home through the West Village and was struck by the fresh urban clamor; every single restaurant’s outdoor seating booths were packed to the brim. <a href='https://ny.eater.com/2021/2/5/22268498/cuomo-earlier-return-indoor-dining-nyc' target='blank' style={{color:'blue', fontsize:16}}>The return of indoor dining</a> — scheduled for Valentine’s Day — could not come soon enough. 


  </p> 
    
    <p>
    As for the cookie and the cheesecake — well, what else can I really say about the products of a 47-year-old NYC institution that’s just about made it to the other side of a pandemic? I happily munched the first half of the massive cookie before dunking the rest in my vanilla sweet cream cold brew (Starbucks FTW). An M&M sugar cookie is kind of like a layup for a bakery — just dab out a few after you finish twisting the croissant dough and filling the lobster tails, and you’ve got yourself some quick numbers on the board. 

</p>
<p>The cheesecake was thick, not-too-sweet, and definitely a dessert you need to give room to breathe going down the gullet. I started out eager, shoveling my way through ultra-dense cumulus forms of cheese-and-sugar, before slowing to a crawl as I penetrated the soft, wafer-thin Oreo crust. 


</p>
    
<p>I rarely pause for breath when eating dessert, but this cheesecake has bested me. I’m currently staring at the last few bites, wondering if I’ll be able to finish tonight. 


</p>
<p>Wait! Just finished. Now <i> that’s</i> a New York City cheesecake. 

</p>

<p>	Pasticceria Rocco seems to do all things well — an old-world bakery with enough savor and variety to slow down the fastest-paced Manhattanite. Come here for espresso; come here for a cookie; come here for cheesecake. Just come. 

</p>




<p>Until next time.</p>
   </body>

</div>

</ScrollIntoView>
)
}
}

export default PasticceriaRoccoPost;