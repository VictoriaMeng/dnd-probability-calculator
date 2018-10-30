import React, { Component } from 'react';
import ACInput from '../components/ACInput';
import { connect } from 'react-redux';

class ACContainer extends Component {
  render() {
    return (
      <ACInput />
    )
  }
}

export default connect()(ACContainer)