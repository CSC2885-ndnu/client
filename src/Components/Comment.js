import React, { Component } from "react";

class Comment extends Component {


  render() {
    //console.log(this.props.commentList);
    return (
    <div>
      {this.props.commentList && this.props.commentList.map(comment => {
        return (
          <div className="postContainer">
            <div className="row">
              <div className="col-sm-8">
                {comment.text}
              </div>
              <div className="col-sm-4 text-secondary">
                Posted By: {comment.author}<br />{comment.postDate}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    )
  }
}

export default Comment;
