import React, { Component } from 'react';
import ToHitInput from '../components/toHit/ToHitInput';
import ToHit from '../components/toHit/ToHit'
import ToHitList from '../components/toHit/ToHitList'
import { connect } from 'react-redux';
import { ACHitChance, savingThrowChance } from '../actions/calculatorActions'
import { clearErrors } from '../actions/errorActions'

class ToHitContainer extends Component {
  componentDidMount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <div>
        <ToHitInput clearErrors={this.props.clearErrors} newPost={this.props.newPost} ACHitChance={this.props.ACHitChance} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newPost: state.hitChances.newPost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ACHitChance: formData => dispatch(ACHitChance(formData)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToHitContainer)