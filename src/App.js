import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="2">Col 1</Col>
          <Col xs="2">Col 2</Col>
        </Row>
      </Container>
    )
  }
}

