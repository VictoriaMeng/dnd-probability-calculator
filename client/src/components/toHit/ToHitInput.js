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
                pathname: `/users/${this.state.user_id}`,
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
    this.props.hitChance(this.state)
  }
  
  render() {
    return (
      <Container className='form-container'>
        {this.renderRedirect()}
        <h2>Hit Chance/Saving Throw Calculator</h2>
        <Form className='form' onSubmit={this.handleSubmit}>
          <Col xs='4'>
            <FormGroup>
              <Label className='label' for="stat">Target Stat</Label>
              <Input className='input-text' type="select" name="stat" onInput={this.handleChange} id="target-stat">
                <option>AC</option>
                <option>Strength</option>
                <option>Dexterity</option>
                <option>Constitution</option>
                <option>Intelligence</option>
                <option>Wisdom</option>
                <option>Charisma</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="modifier">Modifier Value</Label>
              <Input className='input-text' name="modifier" onChange={this.handleChange} type="number" id="modifier-value"></Input>
            </FormGroup>
            <FormGroup>
              <Label for="target">Target AC or DC</Label>
              <Input className='input-text' name="target" onChange={this.handleChange} type="number" id="target-value"></Input>
            </FormGroup>
            <FormGroup>
              <Input className='input-btn calc' type="submit" value="Calculate!"></Input>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    )
  }
}
