import React, { Component } from 'react';
import CalculatorInput from '../components/CalculatorInput';
import { connect } from 'react-redux';
import { acHitChance } from '../actions/calculatorActions'

class ACContainer extends Component {
  render() {
    return (
      <CalculatorInput acHitChance={this.props.acHitChance} />
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
    acHitChance: formData => dispatch(acHitChance(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ACContainer)