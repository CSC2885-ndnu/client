import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import UserDetails from "../Components/UserDetails.js";
import ClassTakenOnNoteFinder from "../Components/ClassTakenOnNoteFinder.js";

import PersonalPicture from "../Assets/PersonalPicture.jpg";
import "./MyAccountPage.css";

class MyAccountPage extends Component {

  render() {
    console.log(this.props.user.isAdmin);
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
        <div className="container">
          <div className="TitlePage">My Account</div>

          <div className="name"> 
            {this.props.user.firstName}
            {this.props.user.lastName}
          </div>
          <hr />
          <div className="userPicture ">
            <img src={PersonalPicture} width="200" height="150" r />
          </div>
          <hr />
          {!this.props.user.isAdmin ? (
            <ClassTakenOnNoteFinder user={this.props.user}/>
          ) : (
            <h1>admin features</h1>
          )}

          <UserDetails user={this.props.user}/>
          <div className="headerInWelcomePage">Your recent post:</div>
          <h1>Post table shows all submission of user, need a new endpoint getpostby userID</h1>
        </div>
        <Footer isLoggedIn={this.props.isLoggedIn} />
      </div>
    );
  }
}

export default MyAccountPage;
