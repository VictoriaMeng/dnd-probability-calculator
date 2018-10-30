import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xl="6">
            <Button color="primary" size="lg">
              Calculate AC
            </Button>
          </Col>

          <Col xl="6">
            <Button color="primary" size="lg">
              Calculate Saving Throw
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

