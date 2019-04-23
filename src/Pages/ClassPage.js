import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import PostTable from "../Components/PostTable.js";

class ClassPage extends React.Component {
  constructor(props) {
    super(props);

    console.log("class ID/Title/Description");
    console.log(this.props.match.params.classId); 
    console.log(this.props.location.state.classTitle);
    console.log(this.props.location.state.classDescription);

    this.state  = {
        classPostsData: []
    };
  }

    componentDidMount() {
        fetch("http://localhost:8080/seniorproject/getCoursePosts/"+this.props.match.params.classId) // fetch from localhost by classId
            .then(data => data.json())
            .then(data => this.setState({classPostsData: data}))
      }

    render() {
      const toCreatePostPage = {
                          pathname: "/post",
                          state: {
                            classId: this.props.match.params.classId,
                            userId: this.props.user.user_id,
                            classTitle: this.props.location.state.classTitle,
                            classDescription: this.props.location.state.classDescription
                          }
                        }
        return(
          <div>
            <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
            <Link to={toCreatePostPage}>Create Post</Link>
            <h1>{this.props.location.state.classTitle}</h1> 
            <p>{this.props.location.state.classDescription}</p>
            {this.state.classPostsData.map(post => {
              return (
                <PostTable
                  key={post.id}
                  post_ID={post.id}
                  post_Title={post.title}
                  post_note={post.note}
                  classId={this.props.match.params.classId}
                  classTitle={this.props.location.state.classTitle}
                  classDescription={this.props.location.state.classDescription}
                />
              );
            })}
            <Footer isLoggedIn={this.props.isLoggedIn} />
          </div>
        );
    }
}

export default ClassPage;