import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Redirect } from 'react-router';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form error being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonFile: [],
      ndnuId: null,
      password: null,

      formErrors: {
        ndnuId: "",
        password: ""
      }
    };
    this.submittingData = this.submittingData.bind(this);
  }


submittingData() {
    const url = "http://localhost:8080/seniorproject/userLogin/" + this.state.ndnuId + "/" + this.state.password;
    fetch(url)
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      alert("user name or password is wrong");
      console.log(response.status);
      throw new Error(response.status);
    }
    
  })
  .then((data) => {
    this.setState({ jsonFile: data});
    console.log(this.state.jsonFile);
    console.log(this.props.setUserState);
    this.props.setUserState(this.state.jsonFile);
    this.props.setIsLoggedInToTrue();
    //window.location.assign("/welcome"); //lose state
  })
  .catch((error) => {
    console.log('error: ' + error);
  });
  }
  // submittingData() {
  //           const url = "http://localhost:8080/seniorproject/userLogin/" + this.state.ndnuId + "/" + this.state.password;

  //   //const url = "http://localhost:8080/seniorproject/getPassword/" + this.state.ndnuId;
  //   console.log("summiting data");
  //   console.log(url);
  //   console.log(this.state.jsonFile);
  //   fetch(url)
  //     .then(data => data.json())
  //     .then(data => console.log(data))
  //     .then(data => this.setState({ jsonFile: data }))
  //     .then(console.log(this.state.jsonFile))
  //     //.then(this.secondFetch());

  //   console.log("first fetch");
  // }

  //   secondFetch() {
  //     console.log(this.state.jsonFile.password);
  //     if (this.state.jsonFile === []) {
  //       console.log("user doesn't exist");
  //       console.log(this.state.jsonFile.password);
  //     } else if (this.state.jsonFile.password === this.state.password) {
  //       const url1 = "http://localhost:8080/seniorproject/userLogin/" + this.state.ndnuId + "/" + this.state.password;
  //       fetch(url1)
  //       .then(data => data.json())
  //       .then(data => this.setState({ user: data }));
  //     } else {
  //       console.log("try it later");
  //     }
  //   }
    

    //set states of ndnuid & password based on user input
    //fetch from http://localhost:8080/seniorproject/getPassword/{NDNUID}
    //see password is matched with this.state.password, if not display wrong pw warning
    //if the fetching returns an empty json, that user doesn't exist
    //else(for other situation) return try later
    //if the NDNUID exist, fetch http://localhost:8080/seniorproject/userLogin/{NDNUID}/{Password}, to store user info in state
    //redirect to Welcome page



    // fetch("http://localhost:8080/seniorproject/userLogin/100001/password")
    //   .then(data => data.json())
    //   .then(data => this.setState({ ndnuId: data.user_id }));
    //   .then( data => {
    //     if(!data === [])
    //       return <Redirect to={{ pathname: '/welcome', state: { ndnuId: '123456' }}} />;
    //     else{
    //       //display error msg 
    //     }
    //   })

    //fetch (if respone == ok), then setstate, then call redirect function
    //if (respone == !ok), then setstate, then display error msg 
    

  handleSubmit = e => {
    e.preventDefault();
    this.submittingData();

    // console.log("summiting data");

    // if (formValid(this.state)) {
    //   this.submittingData();
    // } else {
    //   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    // }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "ndnuId":
        formErrors.ndnuId =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    if (this.props.isLoggedIn) {
        return <Redirect push to="/welcome" />;
    } else {

    
      return (
      <div className="container">
        <div className="Wrapper float-right">
          <div className="form-wrapper float-right">
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="ndnuId">
                <label htmlFor="ndnuId">NDNU ID</label>
                <input
                  className={formErrors.ndnuId.length > 0 ? "error" : null}
                  placeholder="NDNU ID"
                  type="text"
                  name="ndnuId"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.ndnuId.length > 0 && (
                  <span className="errorMessage">{formErrors.ndnuId}</span>
                )}
              </div>

              <div className="password">
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
              
                <button type="submit">
                  Log In
                </button>
              </div>
              <div className="createSumbit">
                <Link to="/" onClick={this.props.setIsRegisteredStateToFalse}>
                  Don't have an account? Register now!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
    }
  }
}

export default Login;
