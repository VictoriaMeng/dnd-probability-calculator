import React, { Component } from 'react';
import ToHitInput from '../components/toHit/ToHitInput';
import { connect } from 'react-redux';
import { hitChance } from '../actions/toHitActions'
import { clearErrors } from '../actions/errorActions'

class ToHitContainer extends Component {
  componentDidMount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <ToHitInput newPost={this.props.newPost} hitChance={this.props.hitChance} />
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
    hitChance: formData => dispatch(hitChance(formData)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToHitContainer)