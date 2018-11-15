import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap'

const User = (props) => 
  <Container>
    {props.user.id}
  </Container>

export default User;