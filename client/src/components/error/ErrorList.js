import React from 'react'
import { Container } from 'reactstrap'

const ErrorList = (props) =>
  <Container id='errormessage'>Error: {props.errors}</Container>

export default ErrorList