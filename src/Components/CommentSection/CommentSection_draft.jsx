import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"


class CommentSection extends React.Component 
{ render() {
    return (
<div>
  <h2>Leave a Comment, If You So Please</h2>
<form className='commentForm'>
  <input type='text' className='input' name='name' placeholder='Your name'/>
 <div className='field'>
<textarea className='textarea' name='comment' placeholder='Add a comment'>

</textarea>


 </div>
 <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
 </div>
 </div>
  </form>
</div>

    )
}
}
export default CommentSection;

//https://www.ably.io/tutorials/reactjs-realtime-commenting#tutorial-step-8
