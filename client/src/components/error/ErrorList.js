import React, { Component } from 'react'

const ErrorList = (props) =>
  <div>Error: {props.errors.join(". ")}</div>

export default ErrorList