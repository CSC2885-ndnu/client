import React, { Component } from "react";

import "./WelcomePage.css";

import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import ClassList from "../Components/ClassList.js";
import WelcomePageRecentSubmission from "../Components/WelcomePageRecentSubmission.js";


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

    fetch("http://localhost:8080/seniorproject/landingpage/3") // submission courseid & description new endpoint
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
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
            <div className="headerInWelcomePage">Your recent submissions:</div>
            <h1>need a new endpoint that return recentsubmission of user's classes plus additional info submission courseid & description to fix the linking</h1>
            {this.state.postData.map(post => {
              return (
                <WelcomePageRecentSubmission
                  key={post.id}
                  submission_title={post.submission_title}
                  submission_course_name={post.submission_course_name}
                  submission_notes={post.submission_notes}
                  submission_time_class_meets={post.submission_time_class_meets}
                  submission_date={post.submission_date}
                  submission_link={post.submission_link}
                  submission_flag={post.submission_flag}
                />
              );
            })}
          </div>
        <Footer isLoggedIn={this.props.isLoggedIn}/>
        
      </div>
    );
  }
}
