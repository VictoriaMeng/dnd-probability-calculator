import React, { Component } from 'react';
import ACInput from '../components/ACInput';
import { connect } from 'react-redux';
import { acHitChance } from '../actions/calculatorActions'

class ACContainer extends Component {
  render() {
    return (
      <ACInput acHitChance={this.props.acHitChance} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    acHitChance
  }
}

export default connect(null, mapDispatchToProps)(ACContainer)