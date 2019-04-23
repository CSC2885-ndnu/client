import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import ViewPost from "../Components/ViewPost.js";

class ViewPostPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      postData: []
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.postId);
    fetch("http://localhost:8080/seniorproject/viewpostpage/" + this.props.match.params.postId) //fetch from localhost by postID
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }
  render() {
    console.log("1post + comment");
    console.log(this.state.postData);
    console.log(this.state.postData.title);
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
        <ViewPost postData={this.state.postData} />
        <Footer isLoggedIn={this.props.isLoggedIn} />
      </div>
    );
  }
}

export default ViewPostPage;

// {this.state.postData.map(post => {
//           return (
//             <ViewPost
//               key={post.id}
//               title={post.title}
//               course={post.course_name}
//               class_date={post.class_date}
//               post_created_date={post.post_created_date}
//               note={post.note}
//               user={post.user}
//               comment={post.commentList}
//             />
//           );
//         })}



// <ViewPost
//               key={this.state.postData.id}
//               title={this.state.postData.title}
//               course={this.state.postData.course_name}
//               class_date={this.state.postData.class_date}
//               post_created_date={this.state.postData.post_created_date}
//               note={this.state.postData.note}
//               user={this.state.postData.user}
//               comment={this.state.postData.commentList}
//             />
//         <Footer isLoggedIn={this.props.isLoggedIn} />
