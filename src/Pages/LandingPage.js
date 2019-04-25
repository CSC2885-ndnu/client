import React, { Component } from "react";

import "./LandingPage.css";
import personNotes from "../Assets/personNotes.jpg";

import Navbar from "../Components/Navbar.js";
import Login from "../Components/Login.js";
import Register from "../Components/Register.js";
import Footer from "../Components/Footer.js";
import RecentSubmission from "../Components/RecentSubmission.js";

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
    	isRegistered: true
  	};
  	this.setIsRegisteredStateToFalse = this.setIsRegisteredStateToFalse.bind(this);
  	this.setIsRegisteredStateToTrue = this.setIsRegisteredStateToTrue.bind(this);
  }

  setIsRegisteredStateToFalse() {
  	this.setState({ isRegistered: false });
  }
  setIsRegisteredStateToTrue() {
  	this.setState({ isRegistered: true });
  }

	render() {
		console.log(this.props.setUserState);
		return (
			<div>
				<Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
				<div className="container">
					<h2 className="welcomeBanner">Welcome to NoteFinder at NDNU!</h2>
					<div className="PLogo float-left">
            <img src={personNotes} width="500" height="325"/>
          </div>
          {this.state.isRegistered ? (
          	<Login 
              isLoggedIn = {this.props.isLoggedIn}
          		setIsRegisteredStateToFalse = {this.setIsRegisteredStateToFalse}
          		setUserState = {this.props.setUserState}
          		setIsLoggedInToTrue = {this.props.setIsLoggedInToTrue}
          	/>
          	) : (
          	<Register 
          		isRegistered = {this.state.isRegistered} 
          		setIsRegisteredStateToTrue = {this.setIsRegisteredStateToTrue}
          	/>
          	)
          }
          <RecentSubmission />
          <Footer isLoggedIn={this.props.isLoggedIn} />
				</div>
			</div>
		);
	}
}
export default LandingPage;