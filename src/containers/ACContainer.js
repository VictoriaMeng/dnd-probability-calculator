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

const mapStateToProps = state => {
  return {
    hitChance: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    acHitChance: formData => dispatch(acHitChance(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ACContainer)