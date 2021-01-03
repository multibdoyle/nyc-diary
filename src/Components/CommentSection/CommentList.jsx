import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Comment = props => (
    <tr>
        <td>{props.comment.comment_name}</td>
        <td>{props.comment.comment_text}</td>

        <td>
            <Link to={"/edit/"+props.comment._id}>Edit</Link>
        </td>
    </tr>
)

export default class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {comments: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/comments/')
            .then(response => {
                this.setState({comments: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    commentList() {
        return this.state.comments.map(function(currentComment, i) {
            return <Comment todo={currentComment} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Comments List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.commentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}