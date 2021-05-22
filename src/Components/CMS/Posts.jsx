import React from "react"
import PropTypes from "prop-types"
import Post from "./Post"
import styled from "styled-components"

const PostList = styled.div`
  article {
    margin-bottom: 20px;
  }
`

const Posts = ({ posts, slug }) => {
  return (
    <div>
    
    <div>
   {  console.log('I was triggered during componentDidMount')}

      <PostList>
        {posts.length > 0 &&
         posts
            .filter(post=> !post.pId)
            .map(post=> {
              let child
              if (post.id) {
                child = posts.find(c => post.id === c.pId)
              }
              {  console.log('what is the child:', child)}
              return (
                <Post
                
                  key={posts.id}
                  child={child}
                  comment={post}
                  slug={slug}
                
                />
              
              )
            })}
          {  console.log("Log the slug!",slug)}
      </PostList>
      {  console.log('la data:', slug)}
      </div>
    </div>
  )
}

Posts.propTypes = {
  slug: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
}

export default Posts