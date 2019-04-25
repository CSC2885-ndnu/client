import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage.js";
import AboutPage from "./Pages/AboutPage.js";
import PrivacyPage from "./Pages/PrivacyPage.js";
import ContactUsPage from "./Pages/ContactUsPage.js";
import WelcomePage from "./Pages/WelcomePage.js";
import ClassPage from "./Pages/ClassPage.js";
import ViewPostPage from "./Pages/ViewPostPage.js";
import CreatePostPage from "./Pages/CreatePostPage.js";
import MyAccountPage from "./Pages/MyAccountPage.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: []
    };
    this.setUserState = this.setUserState.bind(this);
    this.setIsLoggedInToTrue = this.setIsLoggedInToTrue.bind(this);
    this.resetAllState = this.resetAllState.bind(this);
  }

  setIsLoggedInToTrue() {
    this.setState({isLoggedIn: true});
  }

  setUserState(e) {
    this.setState({user: e});

  }
  resetAllState() {
    this.setState({ isLoggedIn: false,
                    user: []
                  });

  }



  render() {
    return (
      <Router>
        <div className="backGroundColor">
          <Route path="/" exact render={() => <LandingPage isLoggedIn={this.state.isLoggedIn} user={this.state.user} setUserState={this.setUserState} setIsLoggedInToTrue={this.setIsLoggedInToTrue} resetAllState={this.resetAllState}/>} />
          <Route path="/about" exact render={() => <AboutPage isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/contactus" exact render={() => <ContactUsPage isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/privacy" exact render={() => <PrivacyPage isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/welcome" exact render={() => <WelcomePage isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/myAccount" exact render={() => <MyAccountPage isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/classpage/:classId" exact render={(props) => <ClassPage {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/viewpost/:postId" exact render={(props) => <ViewPostPage {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />
          <Route path="/post" exact render={(props) => <CreatePostPage {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user} resetAllState={this.resetAllState}/>} />


        </div>
      </Router>
    );
  }
}

export default App;
// npm install --save react-router-dom
// npm install --save bootstrap
// npm install --save reactstrap react react-dom
// npm install --save react-router-dom
// npm install --save react-router-dom
// npm install react-bootstrap bootstrap
// npm install react-datepicker --save
// npm install react-bootstrap-table-next --save
// npm install react-table
