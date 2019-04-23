import React, { Component } from "react";

class CreateComment extends Component {

  render() {
    //console.log(this.props.postData.commentList);
    //console.log(this.state.comment);
    return (
        <div className="postContainer">
            <div className="row">
            	<div className="col-sm-1">
                Reply: 
              </div>
              <div className="col-sm-7">
                MESAGE
              </div>
              <div className="col-sm-4 text-secondary">
                BUTTON
              </div>
            </div>
          </div>
    );
  }
}

export default CreateComment;