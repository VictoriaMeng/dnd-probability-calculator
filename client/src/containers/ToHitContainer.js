import React, { Component } from 'react';
import ToHitInput from '../components/toHit/ToHitInput';
import ToHit from '../components/toHit/ToHit'
import ToHitList from '../components/toHit/ToHitList'
import { connect } from 'react-redux';
import { ACHitChance, savingThrowChance } from '../actions/calculatorActions'

class ToHitContainer extends Component {
  displayLastCalc = () => {
    if (this.props.hitChances.length > 0) {
      const chances = this.props.hitChances
      return <ToHit calculation={chances[chances.length-1]} />
    }
  }

  render() {
    return (
      <div>
        <ToHitInput savingThrowChance={this.props.savingThrowChance} ACHitChance={this.props.ACHitChance} />
        <ToHitList hitChances={this.props.hitChances}/>
        {this.displayLastCalc()}
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
  debugger;
  return {
    ACHitChance: formData => dispatch(ACHitChance(formData)),
    savingThrowChance: formData => dispatch(savingThrowChance(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToHitContainer)