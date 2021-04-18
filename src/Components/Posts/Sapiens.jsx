import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link,BrowserRouter as Router } from 'react-router-dom'
import levain_cookies from '../../levain_cookies_2.png'
import ScrollIntoView from '../ScrollIntoView/ScrollIntoView'
import './Sapiens.css'
import CommentForm from './../CommentSection/CommentForm.js'
import CommentList from './../CommentSection/CommentList.jsx'
class Sapiens extends React.Component 
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
    
     <img src='https://live.staticflickr.com/1969/44765796314_e4db9593cf_b.jpg'  alt='chef' class='center' ></img>

     <h6 style={{fontSize:14}}> Saturday, August 8th, 2020</h6>
   <h2>'Sapiens' Wants You to Stare Into the Void</h2>

   <p>I was really excited to read ‘Sapiens,’ Yuval Noah Harari’s sweeping survey of humanity, but also expecting to be maybe-kinda-sorta offended. 
 </p>
   <p>Harari, a lecturer at the Hebrew University of Jerusalem’s Department of History, is known for stirring the waters around all sorts of ideological boats - conservative, liberal, techno-utopian, Luddite, whatever whatever. I was prepared for some statistics about deaths caused in religious wars, an elevated view of replacing God with technology and scientific rationality, a digression on morality where morality is a relative term - all the usual pot-shots against faith. 
 </p>
   <p>
   But history is fun, genetics and biology are my schtick, and I thought any insights that could be derived through the wide lens of humanity would make a worthwhile read.

 </p>
   <p>‘Sapiens’ starts with the evidence around the evolutionary progression of man -  from chimpanzee to Neanderthal to Homo Sapiens - and quickly leapfrogs into the development of early cultures around shared mythologies. 

 </p>
<p>The Cognitive Revolution - taking place over a hefty time-span of 70,000 - 30,000 BC - was, according to Harari, the true start of man’s eventual dominion over the Earth. Here is when languages developed - nuanced enough to communicate everything from danger signals to affection - and when storytelling became a determining factor in community creation. 

</p>
<p>Legends and religions kept people together and imposed order over ever-growing tribes. Sounds like a nice evolutionary mechanism, right? But here, too, is where the nihilistic side of Harari as history-guide emerges. ‘Large numbers of strangers can cooperate successfully by believing common myths’, Harari writes. He proceeds to compare Peugeot, a semi-popular 210-year-old French automobile brand, to the ancient European’s belief in mythological creatures, as uncovered in evocative cave-drawings and statuettes. 

</p>
<p>Harari declares, with dogmatic intellectual authority, that Peugeot’s founder created the enduring brand ‘in much the same way that priests and sorcerers have created gods and demons throughout history … It all revolved around telling stories, and convincing people to believe them.’
</p>
<p> On the one hand, Harari draws a great insight into humans as storytelling creatures. By Harari’s logic, I could (perhaps) defend my job in advertising as continuing a broader tradition of myth-building to unite society.

</p>
<p>But at the same time, he draws a false comparison between man’s enduring search for meaning - a need for God, dare I say? - and man’s ability to engineer improvements for the here-and-now. When I first read Harari’s conclusion that - quoting directly - “Peugeot is a figment of our collective imagination” - I couldn’t help but think back to the inane theories on reality I’d propound while smoking foreign substances in the ol’ frat house, circa 2010.

</p>
<p>Is <i>this</i> the kind of analysis that gets a dinner invitation to the Zuckerberg's, and speaking engagements at the World Economic Forum in Davos?

</p>
<p>‘Sapiens’ is six years old (nine, if you count the original Israeli publication in 2011), and I’d be far from the first to question Harari’s facile jump-takes across millenia. A <a href='https://www.newyorker.com/magazine/2020/02/17/yuval-noah-harari-gives-the-really-big-picture' target='blank' style={{color:'blue',fontSize:16}}> dishy profile of Harari in ‘The New Yorker’ </a>in February pretty much addressed the whole gamut of critiques I thought of while reading the book - the questionable way he interprets scientific research, the eagerness to tear down other people’s beliefs with his own scattered evidence, the absolute dearth of solutions he proposes to fill the holes he tries to poke in reality's fabric. 

</p>
<p> Harari’s like the intellectual Joker: he just wants to watch ideologies burn, including the ideology of ‘humanity.’ 
</p>
<p>But as coldly removed as Harari considers himself from man’s deep need for storytelling, he does tell a story in ‘Sapiens’: the story of how a big-brained species took over the world, even if ‘taking over’ meant extensive destruction of life and resources. 
</p>
<p>Harari - a deft writer - insists the Agricultural Revolution was net-negative for most sapiens, with longer working hours and a less nutrient-diverse diet. Similarly, he argues the quality-of-life improvements pulled off in the Scientific Revolution were offset by degradation of the environment and a depletion of genetic diversity.
</p>
<p>True, humans tend to vacuum-suck environments of their biggest, fattest varieties of flora and fauna. But on the bright side (or dark? Light? What is color, man?), human-made solutions to our own limitations and worst habits are, according to Harari, our best chance of continuing the sapiens’ gene pool, assuming we don’t first obliterate ourselves in the quest for progress. 
</p>
<p>The book’s last chapter, ‘The End of Homo Sapiens,’ discusses the cutting-edge biotech innovations from the decades 1990-2010, including thought-controlled prosthetic arms and the one time scientists grew an ear-shaped cartilage structure on the back of a mouse. 
</p>
<p>I’ve yet to catch up on Harari’s thoughts around our current genetic revolution. 
  Highly accurate genetic splicing tools like CRISPr  - which is key in <a href='https://www.technologynetworks.com/genomics/news/scientists-work-towards-a-crispr-based-covid-19-therapy-335707' target='blank' style={{color:'blue',fontSize:16}}> certain coronavirus vaccine trials</a> - could be viewed, in one sense, as proving Harari broadly correct. Humans have continued to develop tools to make us less human. But then, predicting that technology will change lives is just about the easiest way to hedge your bets in any argument about the future. 
</p>
<p>Anyway, I’m not even sure Harari wanted to predict the future with ‘Sapiens.’ He admits himself, in a back-of-the-book Q&A, “I may be good at raising questions, but I’m far less competent in providing answers.’
</p>
<p>Fittingly, he gives a darkly opaque summary of the ‘situation of humankind’ in the same Q&A:
</p>
<p>
“Things are better than ever. Things are still quite bad. Things can become much worse.”
</p>
<p>Hmmm *strokes chin thoughtfully* Saying everything and nothing at all. Spoken like a true sapien.</p>





  
   </body>
   <CommentForm></CommentForm>
<CommentList></CommentList>
</div>

</ScrollIntoView>
)
}
}

export default Sapiens;