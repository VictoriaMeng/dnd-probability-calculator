import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => 
<Container>
  <h1>5e Dungeons & Dragons Probability Calculator</h1>
  <Link class='link' to='/signup'>Sign Up</Link>
  <Link class='link' to='/login'>Login</Link>
</Container>

export default Home;