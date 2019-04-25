import React, { Component } from "react";
import { CardBody, Button } from "reactstrap";

import "./UserDetails.css";

class UserDetails extends Component {

  render() {
    return (
      <div className="Usercard">
        <CardBody>
          <hr />
          <div className="Title">User Details</div>
          <hr />
          <div className="idnum float-left">ID Number :</div>
          <div className="Uname">{this.props.user.user_id}</div>

          <div className="idnum float-left">First Name :</div>
          <div className="Uname">{this.props.user.firstName}</div>

          <div className="idnum float-left">Last Name :</div>
          <div className="Uname">{this.props.user.lastName}</div>

          <div className="idnum float-left">Student ID :</div>
          <div className="Uname">{this.props.user.studentID}</div>

          <div className="idnum float-left">Email :</div>
          <div className="Uname">{this.props.user.email}</div>

          <div className="idnum float-left">Password :</div>
          <div className="Uname">{this.props.user.password}</div>
        </CardBody>
      </div>
    );
  }
}

export default UserDetails;
