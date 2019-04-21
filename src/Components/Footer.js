import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
class Footer extends Component {


  render() {
    return (
      <div>
        <footer className="footer float-right ">
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </Col>
              <Col xs lg="3">
                <Link className="nav-link" to="/privacy">
                  Privacy Policy
                </Link>
              </Col>
              <Col xs lg="3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Col>
              <Col xs lg="3">
                <a className="nav-link" target="_blank" rel="noopener noreferrer" href="http://www.ndnu.edu/campus-life/files/2018/03/Housing-License-2018-2019.pdf">
                  Terms of Use
                </a>
              </Col>

            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
