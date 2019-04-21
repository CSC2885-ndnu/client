import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
    	<div className="postContainer">
    		<div className="row">
            	<div className="col-sm-8">
            		{this.props.text}
            	</div>
            	<div className="col-sm-4 text-secondary">
              		Posted By: {this.props.author}<br />{this.props.postDate}
            	</div>
          	</div>
        </div>
    );
  }
}

export default Comment;