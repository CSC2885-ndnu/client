import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import ClassList from "../Components/ClassList.js";

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user.studentID);
    console.log(this.props.user.studentID);
    console.log(this.props.isLoggedIn);

    this.state = {
      classData: [],
      postData: []
    };
  }
  componentDidMount() {
    //http://localhost:8080/seniorproject/getUserCourses/1 fetch by studentID
    fetch("https://api.myjson.com/bins/19wd0c")
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
                    key={classes.id}
                    classId={classes.id}
                    instructor={classes.instructor}
                    classTitle={classes.classTitle}
                    meetingDay={classes.meetingDay}
                    classDescription={classes.classDescription}
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
