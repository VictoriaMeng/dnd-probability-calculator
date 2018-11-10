import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class UserInput extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert(`${this.props.action}`)
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Label for="email">Email:</Label>
        <Input onChange={this.handleChange} type="text" name="email" id="email"/>
        
        <Label for="Password">Password:</Label>
        <Input onChange={this.handleChange} type="text" name="password" id="password"/>
        
        <Input type="submit" value={this.props.action}/>
      </Form>
    )
  }
}