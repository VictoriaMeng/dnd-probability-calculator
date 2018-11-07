import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class DamageInput extends Component {
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