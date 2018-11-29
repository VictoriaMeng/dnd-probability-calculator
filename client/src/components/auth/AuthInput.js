import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { handleChange } from '../../helpers/formHelpers'

export default class AuthInput extends Component {
  state = {
    email: "",
    password: ""
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.action == 'Register') {
      this.props.createUser(this.state)
    } else {
      this.props.login(this.state)
    }     
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Label for="email">Email:</Label>
        <Input onChange={handleChange} type="text" name="email" id="email"/>
        
        <Label for="Password">Password:</Label>
        <Input onChange={handleChange} type="password" name="password" id="password"/>
        
        <Input type="submit" value={this.props.action}/>
      </Form>
    )
  }
}