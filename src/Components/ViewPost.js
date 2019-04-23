import React, { Component } from "react";
import Comment from "../Components/Comment.js";
import CreateComment from "../Components/CreateComment.js";
import "./ViewPost.css";

class ViewPost extends Component {

  render() {
    //console.log(this.props.postData.commentList);
    //console.log(this.state.comment);
    return (
      <div className="container">
        <h1 className="titleFont">{this.props.postData.course}</h1>
        <div className="postContainer">
          <h1 className="titleFont">{this.props.postData.title}</h1>
          <p>{this.props.postData.note}</p>
          <p className="text-muted">
            Attactment
            <br />
            123.pdf
          </p>
          <div className="row">
            <div className="col-sm-4 text-secondary">
              Posted: {this.props.postData.post_created_date}
            </div>
            <div className="col-sm-4 text-secondary">
              Author: {this.props.postData.user}
            </div>
            <div className="col-sm-4 text-secondary">
              Class Date: {this.props.postData.class_date}
            </div>
          </div>
        </div>
        <CreateComment />
        <Comment commentList = {this.props.postData.commentList}/>
      </div>
    );
  }
}

export default ViewPost;

// {this.props.postData.comment.map(comment => {
//           return (
//             <Comment
//               key={comment.commentID}
//               text={comment.text}
//               postDate={comment.postDate}
//               author={comment.author}
//             />
//           );
//         })}

