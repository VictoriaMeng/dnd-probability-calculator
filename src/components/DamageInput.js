import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class DamageInput extends Component {
  state = {
    dieCount: "",
    dieValue: 4
  }

  handleChange = (event) => {

  }
  
  render() {
    return (
      <Form inline>
        <Input type="number" name="dieCount" id="die-count" />
        <Input type="select" name="dieValue" id="die-value">
          <option value="4">d4</option>
          <option value="6">d6</option>
          <option value="8">d8</option>
          <option value="10">d10</option>
          <option value="12">d12</option>
        </Input>
        <Input type="submit" value="Calculate"></Input>
      </Form>
    )
  }
} 