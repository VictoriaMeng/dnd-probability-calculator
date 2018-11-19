import React, { Component } from 'react';
import ToHitInput from '../components/toHit/ToHitInput';
import ToHit from '../components/toHit/ToHit'
import ToHitList from '../components/toHit/ToHitList'
import { connect } from 'react-redux';
import { ACHitChance, savingThrowChance } from '../actions/calculatorActions'

class ToHitContainer extends Component {
  render() {
    return (
      <div>
        <ToHitInput ACHitChance={this.props.ACHitChance} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ACHitChance: formData => dispatch(ACHitChance(formData))
  }
}

export default connect(null, mapDispatchToProps)(ToHitContainer)