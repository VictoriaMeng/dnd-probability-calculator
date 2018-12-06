import React, { Component } from 'react';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AuthInput extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.action == 'Register') {
      this.props.createUser(this.state)
    } else {
      this.props.login(this.state)
    }     
  }

  render() {
    return (
      <Container>
        <h2>{this.props.action}</h2>
        <Row>
          <Col xs='12'>
            <Form className='form' inline onSubmit={this.handleSubmit}>
              <Label for="email">Email:</Label>
              <Input className='input-text' onChange={this.handleChange} type="text" name="email" id="email"/>
              
              <Label for="Password">Password: </Label>
              <Input className='input-text' onChange={this.handleChange} type="password" name="password" id="password"/>
              
              <Input className='input-btn' type="submit" value={this.props.action}/>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}