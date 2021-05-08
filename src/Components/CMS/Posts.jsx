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
                <Post
                
                  key={post.id}
                  child={child}
                  comment={PostAdd}
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

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
posts: PropTypes.array.isRequired
}

export default Posts