import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => 
<Container>
  <h1>5e Dungeons & Dragons Probability Calculator</h1>
  <Link className='link' to='/signup'>Sign Up</Link>
  <Link className='link' to='/login'>Login</Link>
</Container>

export default Home;