import React, { Component } from 'react';
import ToHitInput from '../components/ToHitInput';
import { connect } from 'react-redux';
import { toHitChance } from '../actions/calculatorActions'

class ToHitContainer extends Component {
  render() {
    return (
      <ToHitInput toHitChance={this.props.toHitChance} />
    )
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    hitChances: state.hitChances
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toHitChance: formData => dispatch(toHitChance(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToHitContainer)