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
      <h1>The Genetic Trade-off of Power vs. Speed</h1>
      <p>I think we are far enough along in the general discourse on genetics that most people understand that making yourself ‘faster’ or ‘smarter’ or ‘more attractive’ or - I donno - ‘less allergic to peanuts’ - is not as simple as turning on or off a particular gene on a particular chromosome. Genes interact with the environment and each other in complex, fluid ways which even our most advanced machine learning methods have yet to fully explain. 
Nonetheless, the right alleles for the right genes have been shown, statistically, to have a strong effect on all kinds of human performance, including athletic. In fact, at least 73 genetic loci have been associated with fitness and performance phenotypes. 
Studies of these genes have highlighted consistently, not just that genes matters in sports - some estimate as much as 66% of athletic ability is conferred by heritable traits -  but also that there is a trade-off between power and endurance. A significant trade-off.
One of the more famous of these performance genes - not exactly as a household name, but perhaps familiar to semi-frequent readers of genetics - is ACTN3, one of four actinin-expression genes in mammals, and the only one solely expressed in fast-twitch muscle fibers. The gene typically lives on chromosome 11, but about 16% of people worldwide are homozygous for the nonsense mutation of ACTN3 - meaning neither of their two chromosome copies has a working gene - and although there are no heritable diseases linked to ACTN3 deficiency, different genotypes are linked to different latitudes, different muscle metabolism pathways and - ultimately - differing levels of athletic performance.  
</p>
<h2>To Have and Have Not</h2>
<p>Because of the trade-off between power and endurance, and the different types of muscle fibers and energy systems used in different types of running, the desired genetic profile for ACTN3 will vary depending on your race of choice. If you’re aiming to run longer distances - one of the 18.3 million road race registrants in the U.S. and you’ve high hopes for crushing your local 5k / 10k / half-marathon / marathon - you might be better off with two null alleles of ACTN3. This null allele has been linked to improved endurance and adaptation to colder climates.  
</p>
<p>Case in point - mice whose ACTN3 genes were effectively ‘knocked-out’ - i.e. nullified - were able to run much longer distances before fatiguing than non-knockout mice. The mice also saw some decreased muscle mass and strength - but what they lost in fast-twitch enzyme processes, such as glycogen phosphylorase, they gained in metabolism conversion to the oxidative aerobic pathway, associated with endurance. 
</p>
<p>The effective use of this aerobic pathway is very important in endurance events. Long-distance runners whose bodies are better able to use non-glucose forms of energy - such as carbohydrates, fats and protein - will produce less lactic acid and generally be able to run more efficiently for longer periods of time than someone who is primarily using glycogen via the glycolysis energy pathway.</p>
   <p>Our preferred energy systems tell us more than our preferred race distance; they can tell us about our ancestry as well - at least how far our ancestors’ were from the equator. The null ACTN3 genotype was positively selected in environments where certain types of muscle metabolism - such as those favoring efficient fat usage - were necessary for survival. Similarly, those gene-knockout mice had physiological changes associated with cold acclimitization and their body’s heat production. 
</p>
<p>But - remember - there is a trade-off here. And in fact, where being deficient in ACTN3 might make you proficient in lapping the soccer moms at your local 5k, you are also more likely to be of the pencil-necked, spaghetti-armed variety. Like the guy getting an ol’ fashioned rough-housing below: 
</p>
    <img src='https://thumbs-prod.si-cdn.com/d2F0t8RueMiSkRPIsECoAsIPXKY=/fit-in/1072x0/https://public-media.si-cdn.com/filer/Charles-Atlas-comic-3.jpg' alt='beach photo' height='200' width='350' class='center'></img>
      <h3>Keep off me you ACTN3-glutted freak! - Charles Atlas nerd, probably</h3>
      <p>So what of those who landed at least one working copy of ACTN3, who have more actin-binding power in their fast-twitch muscle fibers? Multiple studies have demonstrated that elite sprint and power athletes have significantly higher frequencies of the functioning 577R allele - the association is even stronger than that of the null alleles and endurance athletes. </p>
  <p>To wit - one study compared the ACTN3 profiles of Australian athletes, including an elite endurance group, an elite sprinting group, and a control group of 436 healthy - but non-elite - adults. 50% of the elite Australian sprinter group displayed the RR genotype - indicating two working copies of the ACTN3 gene - compared to 30% of the control group and 31% of the endurance group. Additionally, none of the 35 female sprinters profiled were alpha-actinin-3 deficient, and only 8% of male sprinters were alpha-actinin-3 deficient. 
</p> 
<p>For power and sprint activities - it pays to have both your chromosomes pumping alpha-actinin-3 proteins. 
</p>
<p>The XX genotypes, while not too common among those stud sprinters, were over-prevalent in the endurance athletes - as expected. Again, the gene’s significance among females was of particular interest, as 29% of the female endurance athletes were lacking any functioning ACTN3 gene, compared to 20% of the control group and 0% of the sprinter group. 

</p>
<p>This trade-off between speed and power is talked about on the non-molecular level as well by elite coaches. Legendary distance coach Renato Canova based his marathon-training philosophy on the concept of increasing an athlete’s specific ability to endure for longer and longer intervals. 
</p>
<p>And other variants of performance genes also illustrate the trade-off - such as the ACE gene’s variants, which have been associated with both increased power performance - as in the case of the D allele, where a 287 bp segment is deleted - and increased endurance performance - as in the case of the I allele, involving an insertion of the same segment. 
</p> 
<p>Of course, the variety of heterozygous and homozygous individuals also present among elite endurance groups points to a multitude of factors leading to athletic greatness. Some in our control - like training quality- and some more luck-of-the-draw, like living altitude. 
</p> 
<p>Just remember that your 8-inch vertical leap and inability to bench press the bar at the gym are no excuse for not crushing the competition at your next 5k. 
</p>
<p>No matter your genetic variant, just keep running, my friends :)</p>
   
   
    </div>
  </div>
</div>)
}
}

export default GeneticsPost;