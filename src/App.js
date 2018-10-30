import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ACContainer from './containers/ACContainer'
import SavingThrowContainer from './containers/SavingThrowContainer'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xl="6">
            <Button color="link" size="lg">
              Calculate AC
            </Button>
          </Col>

          <Col xl="6">
            <Button color="link" size="lg">
              Calculate Saving Throw
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

