import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import "./Navbar.css";
import notefinder from "../Assets/Notefinder-Logo.png";
import ndnu from "../Assets/ndnu.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md mb-4">
        <div className="container">
          {this.props.isLoggedIn ? (
            <Link className="navbar-brand" to="/welcome">
              Ndnu Notes
            </Link>
          ) : (
            <Link className="navbar-brand" to="/">
              <img src={ndnu} width="200" height="75" />
            </Link>
          )}

          <div className="Logo float-left">
            <Row className="justify-content-md-center">
              <Col xs="4">
                <img src={notefinder} width="400" height="150" />
              </Col>
            </Row>
          </div>
          {this.props.isLoggedIn ? (
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/myAccount">
                      My Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={this.props.resetAllState}
                      to="/"
                    >
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
