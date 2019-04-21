import React, { Component } from "react";
import Comment from "../Components/Comment.js";
import "./ViewPost.css";

class ViewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
    };
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="titleFont">{this.props.course}</h1>
        <div className="postContainer">
          <h1 className="titleFont">{this.props.title}</h1>
          <p>{this.props.note}</p>
          <p className="text-muted">
            Attactment
            <br />
            123.pdf
          </p>
          <div className="row">
            <div className="col-sm-4 text-secondary">
              Posted: {this.props.post_created_date}
            </div>
            <div className="col-sm-4 text-secondary">
              Author: {this.props.user}
            </div>
            <div className="col-sm-4 text-secondary">
              Class Date: {this.props.class_date}
            </div>
          </div>
        </div>
        {this.state.comment.map(comment => {
          return (
            <Comment
              key={comment.id}
              text={comment.text}
              postDate={comment.postDate}
              author={comment.author}
            />
          );
        })}
      </div>
    );
  }
}

export default ViewPost;
