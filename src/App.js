import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="2">Calculate AC</Col>
          <Col xs="2">Calculate Saving Throw</Col>
        </Row>
      </Container>
    )
  }
}

