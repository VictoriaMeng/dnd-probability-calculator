import React, { Component } from 'react';
import ToHitInput from '../components/ToHitInput';
import ToHit from '../components/ToHit'
import { connect } from 'react-redux';
import { toHitChance } from '../actions/calculatorActions'

class ToHitContainer extends Component {
  render() {
    return (
      <div>
        <ToHitInput toHitChance={this.props.toHitChance} />
        <ToHit />
      </div>
    )
  }
}

const mapStateToProps = state => {
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