import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ClassList.css";

class ClassList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     classId: this.props.classId,
  //     classTitle: this.props.classTitle,
  //     classDescription: this.props.classDescription
  //   };
  // }

  render() {
    console.log(this.props.classId);
    console.log(this.props.classTitle);
    console.log(this.props.classDescription);

    const toClassPage = {
                          pathname: "/classpage/" + this.props.classId,
                          state: {
                            classTitle: this.props.classTitle,
                            classDescription: this.props.classDescription 
                          }
                        }

    //console.log(toClassPage);

    
    return (
    	<div>
        <Link to={toClassPage}>
          <h3 className="titleStyle">{this.props.classTitle}</h3> 
        </Link>
        
    		<div className="row">
          <div className="col-sm-6 text-secondary">
            Instructor: {this.props.instructor}
          </div>
          <div className="col-sm-6 text-secondary">
            Meeting day: {this.props.meetingDay}
          </div>
        </div>
    	</div>
    );
  }
}

export default ClassList;