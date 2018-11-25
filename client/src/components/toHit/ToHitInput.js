import React, {Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";

export default class ToHitInput extends Component {
  componentDidUpdate() {
    if (this.props.newPost) {
      this.setRedirect()
    }
  }
  
  state = {
    stat: 'AC',
    modifier: '',
    target: '',
    user_id: sessionStorage.getItem('id'),
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
                pathname: `/users/${sessionStorage.getItem('id')}`,
              }} />
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.ACHitChance(this.state)
  }
  
  render() {
    return (
      <div>
      {this.renderRedirect()}
      <Form onSubmit={this.handleSubmit}>
        <Label for="stat">Target Stat</Label>
        <Input type="select" name="stat" onInput={this.handleChange} id="target-stat">
          <option>AC</option>
          <option>Strength</option>
          <option>Dexterity</option>
          <option>Constitution</option>
          <option>Intelligence</option>
          <option>Wisdom</option>
          <option>Charisma</option>
        </Input>

        <Label for="modifier">Modifier Value</Label>
        <Input name="modifier" onChange={this.handleChange} type="number" id="modifier-value"></Input>
        
        <Label for="target">Target AC or DC</Label>
        <Input name="target" onChange={this.handleChange} type="number" id="target-value"></Input>

        <Input type="submit" value="Calculate"></Input>
      </Form>
      </div>
    )
  }
}
