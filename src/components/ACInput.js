import React, {Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ACInput extends Component {
  state = {
    text: ''
  }
  
  render() {
    return (
      <Form inline>
        <Label for="attack-modifier">Attack Modifier</Label>
        <Input type="number" id="attack-modifier"></Input>
        
        <Label for="enemy-AC">Enemy AC</Label>
        <Input type="number" id="enemy-AC"></Input>
        <Button>Calculate Chance to Hit - AC</Button>
      </Form>
    )
  }
}
