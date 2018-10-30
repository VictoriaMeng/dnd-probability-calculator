import React, {Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CalculatorInput extends Component {
  state = {
    attackMod: '',
    enemyAC: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.acHitChance(this.state)
  }
  
  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Label for="attack-modifier">Attack Modifier</Label>
        <Input name="attackMod" onChange={this.handleChange} type="number" id="attack-modifier"></Input>
        
        <Label for="enemy-AC">Enemy AC</Label>
        <Input name="enemyAC" onChange={this.handleChange} type="number" id="enemy-AC"></Input>
        
        <Input type="submit" value="Calculate"></Input>
      </Form>
    )
  }
}
