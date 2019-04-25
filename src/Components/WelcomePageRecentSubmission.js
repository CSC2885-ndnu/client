import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ViewPost.css";



class WelcomePageRecentSubmission extends Component {
  
  
  render() {
  	const toViewPostPage = {
                          pathname: "/classpage/" + this.props.classId,
                          state: {
                            classTitle: this.props.classTitle,
                            classDescription: this.props.classDescription 
                          }
                        }
    return (
      
      <div className="container"> 
      
        
        <br />
        <div className="postContainer">
          <Link to="#"><h1 className="titleFont">{this.props.submission_course_name} - {this.props.submission_title}</h1></Link>
            
          <p>{this.props.submission_notes}</p>
          <p className="text-muted">
            Attactment:
            <br />
            {this.props.submission_link}
          </p>
          
          <div className="row">
          
            <div className="col-sm-4 text-secondary">
              Posted on: {this.props.submission_date}
            </div>
            <div className="col-sm-4 text-secondary">
            Class meets on: {this.props.submission_time_class_meets}
            </div>
            <div className="col-sm-4 text-secondary">
              Flagged: {this.props.submission_flag}
            </div>
            
          </div>
          
        </div>
      </div>
     
    );
  }
}

export default WelcomePageRecentSubmission;
