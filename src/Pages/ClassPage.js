import React from 'react';
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
        fetch("https://api.myjson.com/bins/jfuqc") // fetch from localhost by classId
            .then(data => data.json())
            .then(data => this.setState({classPostsData: data}))
      }

    render() {
        return(
          <div>
            <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />

            <h1>{this.props.location.state.classTitle}</h1> 
            <p>{this.props.location.state.classDescription}</p>
            {this.state.classPostsData.map(post => {
              return (
                <PostTable
                  key={post.post_ID}
                  post_ID={post.post_ID}
                  post_Title={post.post_Title}
                  post_note={post.post_note}
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