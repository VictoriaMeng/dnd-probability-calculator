import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class DamageInput extends Component {
  state = {
    dieCount: "",
    dieValue: ""
  }
  
  render() {
    return (
      <Form inline>
        <Input type="number"/>
        d
        <Input type="select"/>
        <Input type="submit" value="Calculate"></Input>
      </Form>
    )
  }
} 