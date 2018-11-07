import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ToHitContainer from '../containers/ToHitContainer'

const Home = () => 
  <Container>
  <Row>
    <Col xl="6">
      <Link to="/to-hit">Calculate To Hit/Saving Throw Chance</Link>
    </Col>
  </Row>
</Container>

export default Home;