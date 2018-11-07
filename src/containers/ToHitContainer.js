import React, { Component } from 'react';
import CalculatorInput from '../components/CalculatorInput';
import { connect } from 'react-redux';
import { toHitChance } from '../actions/calculatorActions'

class ToHitContainer extends Component {
  render() {
    return (
      <CalculatorInput toHitChance={this.props.toHitChance} />
    )
  }
}

const mapStateToProps = state => {
  return {
    hitChances: state.ac
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toHitChance: formData => dispatch(toHitChance(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToHitContainer)