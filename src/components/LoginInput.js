import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LoginInput extends Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <Form inline>
        <Label for="email">Email:</Label>
        <Input type="text" name="email" id="email"/>
        
        <Label for="Password">Password:</Label>
        <Input type="text" name="password" id="password"/>
        
        <Input type="submit" value="Login/Register"/>
      </Form>
    )
  }
}