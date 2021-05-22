

import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {firestore} from '../../firebase.js'
//import CommentList from '../CommentSection/CommentList'
import  CommentForm from '../CommentSection/CommentForm'
import Posts from './Posts'

function TestPosts() {
  const [blogPosts,setblogPosts]=useState([])
  const fetchblogPosts=async()=>{
    const response=firestore.collection('posts');
    const data=await response.get();
    data.docs.forEach(item=>{
     setblogPosts([...blogPosts,item.data()])
    }
    
    )   
  }
  useEffect(() => {
    fetchblogPosts();
  }, [])
  return (
    <div className="App">
      {
        blogPosts && blogPosts.map(blogPost=>{
          return(
            <div className="blog-container">
              <h1>This is a test post</h1> 
              <img src={blogPost.coverImage} alt={blogPost.coverImageAlt}/>
              <h4>{blogPost.title}</h4>
            <div>  {blogPost.content}</div>
              
            </div>
          )
        })
      }
    </div>
  );
}

export default TestPosts;