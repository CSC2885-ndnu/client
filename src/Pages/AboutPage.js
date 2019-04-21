import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

class AboutPage extends Component {

  render() {
    console.log(this.props.isLoggedIn);
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState}/>
        <div className="container">
          <h2>About Page</h2>
          <p>
            Founded more than 165 years ago, we are the third oldest college in
            California. NDNU is a fully accredited, private, Catholic,
            co-educational master’s university, located on the San Francisco
            Peninsula in Silicon Valley. With approximately 1,700 students from
            29 states and 32 different countries, NDNU broadens the perspective
            and outlook of its students by exposing them to peers with very
            different backgrounds, cultures and world views. At NDNU, smaller
            class sizes, ranging from 12 to 25, means that students receive
            personal attention from excellent instructors in challenging courses
            that cover a wide range of academic programs. Our professors don’t
            just teach; they are committed to help advise and mentor you through
            your college journey. Our location offers learning opportunities and
            internships that can’t be found anywhere else. NDNU also has two
            extension locations with partner colleges, and recently added online
            graduate programs. NDNU strives not only for excellence in
            academics, but also to challenge its students to be extraordinary
            forces for change in the community. This is accomplished through a
            variety of community-based learning programs that redefine the
            concept of “hands-on” learning and connect students with programs
            that allow them to make positive contributions to the community. Our
            students are active outside of the classroom in more than 30 student
            organizations spanning academics, ethnic, sports, professional,
            social and service groups. Student athletes participate in 12 NCAA
            Division II sports, and students in visual and performing arts
            present a varied calendar of events throughout the year. At NDNU,
            all students are given the tools they need to succeed in college and
            life. Whether they are starting college for the first time or
            returning to college after an absence, we have programs tailored to
            all students’ needs so they can earn their degree and succeed in
            their chosen career.
          </p>
        </div>
        <Footer isLoggedIn={this.props.isLoggedIn}/>
      </div>
    );
  }
}

export default AboutPage;
