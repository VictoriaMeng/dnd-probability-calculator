import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class DamageInput extends Component {
  state = {
    dice_count: "",
    die_value: 4,
    user_id: sessionStorage.getItem('id'),
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.calculateDamage(this.state)
    this.setRedirect()
  }
  
  render() {
    return (
      <div>
      {this.renderRedirect()}
      <Form inline onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} type="number" name="dice_count" id="die-count" />
        <Input onChange={this.handleChange} type="select" name="die_value" id="die-value">
          <option value="4">d4</option>
          <option value="6">d6</option>
          <option value="8">d8</option>
          <option value="10">d10</option>
          <option value="12">d12</option>
        </Input>
        <Input type="submit" value="Calculate"></Input>
      </Form>
      </div>
    )
  }
} 