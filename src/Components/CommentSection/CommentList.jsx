
import React, {useState, useEffect} from "react"
//import { graphql } from "gatsby"
//import Layout from "../components/layout"
import Comments from "./Comments"
import {firestore} from '../../firebase.js'


const CommentList = ({ data }) => {
    const [comments, setComments] = useState([{name: "Yung Fly Guy", content: "Hello, I also went there.", pId: null, time: null}])
    const slug =  'intropost'
  
  console.log("here is what got logged", slug)
  
  useEffect(() => {
    firestore
      .collection(`comments`)
      .onSnapshot(snapshot => {
     const posts = snapshot.docs
      .filter(doc => doc.data().slug === slug)
        .map(doc => {
         return { id: doc.id, ...doc.data() }
       })
      setComments(posts)
      })
  }, [slug])
  return (
    <div>
      <div className="container">
        <Comments comments={comments} slug={slug} />
       
      </div>
     
    </div>
    
  )
}

export default CommentList;