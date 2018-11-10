import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LoginInput extends Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <Form>
        <Input type="submit" value="Login/Register"/>
      </Form>
    )
  }
}