

import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {firestore} from '../../firebase.js'



const Home = () => {
  const [loading, setLoading] = useState(true);
const [blogPosts, setPosts] = useState([]);
const slug='new-post-what-it-do-baby'
/*console.log("here is what got logged", slug)*/
  
useEffect(() => {
  firestore
    .collection(`posts`)
  
},)
console.log("here is what got logged",blogPosts)
/*{console.log('here is another slug:',post.title)}*/
  return (

    <div>
    <div className="container">
      <div blogPosts={blogPosts} slug={slug} />

     
    </div>
   
  </div>
  
  );
}

export default Home;