
import React, {Component} from 'react';
import axios from 'axios';
import './LeaveaComment.css'



export default class LeaveaComment extends Component {

    constructor(props) {
        super(props);

        this.onChangeCommentName = this.onChangeCommentName.bind(this);
        this.onChangeCommentText= this.onChangeCommentText.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            comment_name: '',
           comment_text: '',
            
        }
    }

    
    onChangeCommentName(e) {
        this.setState({
            comment_name: e.target.value
        });
    }

    onChangeCommentText(e) {
        this.setState({
           comment_text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        
        console.log(`Comment Name: ${this.state.comment_name}`);
        console.log(`Comment Description: ${this.state.comment_text}`);

        const newComment = {
            comment_name: this.state.comment_name,
           comment_text: this.state.comment_text,
           
        }

        axios.post('http://localhost:4000/comments/add', newComment)
            .then(res => console.log(res.data));

        this.setState({
           comment_name: '',
            comment_text: '',
          
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Post a Comment</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <div className="form-group">
                      
                        <input  type="text"
                                className="form-name"
                                placeholder="Your name"
                                value={this.state.comment_name}
                                onChange={this.onChangeCommentName}
                                />
                    </div>
                    <h3></h3>
                   </div>
                    <div className="form-group">
                   
                        <textarea  type="text"
                                className="form-message"
                                placeholder="Write your message here"
                                value={this.state.comment_text}
                                onChange={this.onChangeCommentText}
                                />
                    </div>
           
             
                    <div className="form-group">
                        <input type="submit" value="Post Comment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}