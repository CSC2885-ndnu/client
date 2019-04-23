import React, { Component } from "react";
import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

class FormX extends Component {
  
  constructor(props) {
    super(props);

    console.log(this.props.location.state.classId);
    console.log(this.props.location.state.userId);

    this.state = {
      summited: false,
      selectedFile: null,
      title: '',
      notes: '',
      course: '',
      flagged: false,
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);

  }
    change = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handleChange(date) {
      this.setState({
        startDate: date
      });
    }

    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);

      const fd = new FormData();
      fd.append('title', this.state.title);
      fd.append('courseID', this.props.location.state.classId);
      fd.append('note', this.state.notes);
      fd.append('userID', this.props.location.state.userId+1); //remove +1 after backend fix their api
      fd.append('flagged', this.state.flagged);

      const searchParams = new URLSearchParams();
      for (const pair of fd) {
        searchParams.append(pair[0], pair[1]);
      }

      fetch("http://localhost:8080/seniorproject/addPost", {
        body: searchParams,
        method: "post"
      })
      .then(response => {
        if (response.status === 200) {
          alert("post created");
          this.setState({ summited:true });
        } else {
          alert("error");
        }
      })
    }

    fileSelectedHandler = (e) => {
      this.setState({
        selectedFile: e.target.files[0]
     })
    } 

    // fileUploadHandler = () => {
    //   const fd = new FormData();
    //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //   axios.post("//API endpoint", fd).then(res => {
    //     console.log(res);
    //   })
    // }

  render() {
    const toClassPage = {
                          pathname: "/classpage/" + this.props.location.state.classId,
                          state: {
                            classTitle: this.props.location.state.classTitle,
                            classDescription: this.props.location.state.classDescription 
                          }
                        }
    if(this.state.summited) {
      return <Redirect push to={toClassPage} />;
    } 
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState}/>
        <h2>Post Note</h2>
        <hr></hr>
        <Container>
           <Form>
               <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Control 
                        name="title"
                        type="title"
                        placeholder="Enter title"
                        value={this.state.title}
                        onChange={e => this.change(e)}  
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <select className="custom-select" name="course" value={this.state.course} onChange={e => this.change(e)}>
                          <option value="Math234">Math234</option>
                          <option value="Art">Art</option>
                      </select>
                    </Form.Group>
                </Form.Row>
            </Form> 
            <Form>
              <Form.Row>
                <Form.Group>
                  <Form.Label>Enter notes</Form.Label>
                    <Form.Control 
                      name = "notes"
                      as="textarea" 
                      rows="3"
                      value={this.state.notes}
                      onChange={e => this.change(e)}
                    />
                </Form.Group>
                <h3 className="text-left">Upload media</h3>
                  <div className="uploaded">
                    <input name="selectedFile" type="file" onChange={e => this.change(e)} />
                    <button onClick={this.selectedFile}> Upload</button>
                  </div>
              </Form.Row>
              <hr></hr>
            </Form>
              <Button 
                onClick ={e => this.onSubmit(e)} 
                variant="primary" 
                type="submit">
                Submit
              </Button>
        </Container>   
        <Footer isLoggedIn={this.props.isLoggedIn}/>
      </div>
    );
  }
}
export default FormX;



