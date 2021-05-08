import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CommentForm from "./CommentForm"
import moment from "moment"

const PostBox = styled.article`
  border: 1px solid #ddd;
  margin: 25px 0 0 ${props => (props.child ? "20px" : "0")};
  padding: 35px;

  .flex-container {
    display: flex;
    align-items: flex-start;

    .flex + .flex {
      margin-left: 10px;
    }
  }
  .post-title {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 700;
    span {
      text-transform: none;
      font-weight: 400;
      font-style: italic;
    }
  }
`

const SinglePost = ({ post }) => (
  <div>
    <div className="flex-container">
      <div className="flex">
        <img
          src="https://i.ibb.co/fxmxF3m/anonymous-avatar-thumbnail-2.jpg" 
          alt="Avatar"
        />
      </div>
      <div className="flex">
        <p className="post-title">
          {post.title} 
        </p>
        {post.date && (<time>{moment(post.date.toDate()).calendar()}</time>)}
      </div>
    </div>
    <p>{post.content}</p>
  </div>
)

const Post = ({ post, child, slug }) => {
  
  return (
    <PostBox>
      <SingleComment comment={comment} />
      {child && (
        <PostBox child className="comment-reply">
          <SingleComment comment={child} />
        </PostBox>
      )}
   
    </PostBox>
  )
}

Post.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
  child: PropTypes.object
}

export default Post