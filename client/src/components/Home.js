import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => 
<Container>
  <figure class="logo animated fadeInDown delay-07s" />
  <h1 class="animated fadeInDown delay-07s">5e Dungeons & Dragons Probability Calculator</h1>
  {/* <a class="link animated fadeInUp delay-1s servicelink" href="#service">Get Started</a> */}
  <Link class='link animated fadeInUp delay-1s servicelink' to='/signup'>Sign Up</Link>
  <Link class='link animated fadeInUp delay-1s servicelink' to='/login'>Login</Link>
</Container>

export default Home;