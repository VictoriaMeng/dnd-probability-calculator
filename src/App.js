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
            <Route path='/ac' component={ACContainer}/>
            <Link to="/ac">Calculate AC</Link>
          </Col>

          <Col xl="6">
            <Link to="/saving-throw">Calculate Saving Throw</Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

