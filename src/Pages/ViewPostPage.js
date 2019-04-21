import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import ViewPost from "../Components/ViewPost.js";

class ViewPostPage extends Component {
  state = {
    postData: []
  };

  componentDidMount() {
    console.log(this.props.match.params.postId);
    fetch("http://www.json-generator.com/api/json/get/cpPVjRuxyW?indent=2") //fetch from localhost by postID
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }
  render() {
	const toClassPage = {
                          pathname: "/classpage/" + this.props.location.state.classId,
                          state: {
                            classTitle: this.props.location.state.classTitle,
                            classDescription: this.props.location.state.classDescription 
                          }
                        }
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
        <Link to={toClassPage}><h1>{this.props.location.state.classTitle}</h1></Link>
        {this.state.postData.map(post => {
          return (
            <ViewPost
              key={post.id}
              title={post.title}
              course={post.course}
              class_date={post.class_date}
              post_created_date={post.post_created_date}
              note={post.note}
              user={post.user}
              comment={post.comment}
            />
          );
        })}
        <Footer isLoggedIn={this.props.isLoggedIn} />
      </div>
    );
  }
}

export default ViewPostPage;
