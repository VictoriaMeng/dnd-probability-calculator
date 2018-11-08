import React, { Component } from 'react';
import ToHitInput from '../components/ToHitInput';
import ToHit from '../components/ToHit'
import { connect } from 'react-redux';
import { toHitChance } from '../actions/calculatorActions'

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
        <ToHitInput toHitChance={this.props.toHitChance} />
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
  return {
    toHitChance: formData => dispatch(toHitChance(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToHitContainer)