import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => 
  <Container>
    <Col xl="6">
      <Link to="/to-hit">Calculate To Hit/Saving Throw Chance</Link>
    </Col>

    <Col xl="6">
      <Link to="/damage">Calculate Damage</Link>
    </Col>

    <Col xl="6">
      <Link to="/signup">Register</Link>
    </Col>

    <Col xl="6">
      <Link to="/login">Login</Link>
    </Col>
</Container>

export default Home;