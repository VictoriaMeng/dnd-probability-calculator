import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import ToHitContainer from './containers/ToHitContainer'
import Home from './components/Home'

export default class App extends Component {
  
  render() {
    return (
      <div>
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/ac">AC Calculator</NavLink>
        <NavLink to="/saving-throw">Saving Throw Calculator</NavLink> */}
        <Route exact path="/" component={Home}/>
        <Route path='/to-hit' component={ToHitContainer}/>
      </div>
    )
  }
}

