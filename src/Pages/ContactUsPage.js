import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import {Form, FormGroup, Input, Label, Button } from 'reactstrap'
//import axios from 'axios'

export default class ContactUs extends Component {
  constructor(){
    super()
    
    this.state = {
      name:'',
      email:'',
      message:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
  }
  handleChange = e=> {
    this.setState({[e.target.name]:e.target.value})
  }
    async handelSubmit(e){
      e.preventDefault()
      console.log(this.state)

      const {name,email,message} = this.state

      // const form = await axios.post('/api/from', {
      //   name,
      //   email,
      //   message

      // })

    }
  
  render() {
    return (
      <div>
        <Navbar isLoggedIn={this.props.isLoggedIn} resetAllState={this.props.resetAllState} />
        <div className="container">
          <h2>Contact Us</h2>
          
            <Form style ={{width: '600px'}}></Form>
            < FormGroup>
            <Label for ="name">name</Label>
            <Input
            type ="text"
            name="name"
            value = {this.state.name}

            onChange={this.handleChange}/>
            </FormGroup>
            
            < FormGroup>
            <Label for ="email">email</Label>
            <Input
            type ="email"
            name="email"
            value = {this.state.email}

            onChange={this.handleChange}/>
            </FormGroup>

            < FormGroup>
            <Label for ="message">message</Label>
            <Input
            type ="textarea"
            name="message"
            value = {this.state.message}
            onChange={this.handleChange}/>
         
            </FormGroup>

            <Button
            onClick = { e => this.handelSubmit(e)}
            type = "submit">Submit
            </Button>
           
          
          

          <Footer isLoggedIn={this.props.isLoggedIn} />
        </div>
      </div>
    );
  }
}
