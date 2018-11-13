import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import ToHitContainer from './containers/ToHitContainer'
import DamageContainer from './containers/DamageContainer'
import Home from './components/Home'
import UserInput from './components/UserInput'
import UserContainer from './containers/UserContainer'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path='/to-hit' component={ToHitContainer}/>
        <Route path='/damage' component={DamageContainer}/>
        <Route path='/users/new' render={props => <UserInput {...props} action="Register" />}/>
        <Route path="/login" render={props => <UserInput {...props} action="Login" />}/>
        <Route path="/users/:id" component={UserContainer} />
      </div>
    )
  }
}

