import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import ClassList from "../Components/ClassList.js";

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
    console.log(this.props.user.user_id);
    console.log(this.props.isLoggedIn);

    this.state = {
      classData: [],
      postData: []
    };
  }
  componentDidMount() {
    
    //fetch("http://localhost:8080/seniorproject/getUserCourses/" + this.props.user.user_id)
    fetch("http://localhost:8080/seniorproject/getUserCourses/1")
      .then(data => data.json())
      .then(data => this.setState({ classData: data }));
  }
  render() {
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
          <h1>Welcome {this.props.user.firstName}</h1>
          <div className="container">
            <div className="boxContainer">
              {this.state.classData.map(classes => {
                return (
                  <ClassList
                    key={classes.course_id}
                    classId={classes.course_id}
                    instructor={classes.professor}
                    classTitle={classes.courseName}
                    meetingDay={classes.meetingDay}
                    classDescription={classes.courseDescription}
                  />
                );
              })}
            </div>
          </div>
        <Footer isLoggedIn={this.props.isLoggedIn}/>
        
      </div>
    );
  }
}
