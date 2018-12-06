import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => 
<Container>
  <h1 class="animated fadeInDown delay-07s">5e Dungeons & Dragons Probability Calculator</h1>
  <Link class='link animated fadeInUp delay-1s servicelink' to='/signup'>Sign Up</Link>
  <Link class='link animated fadeInUp delay-1s servicelink' to='/login'>Login</Link>
</Container>

export default Home;