import React, { Component } from 'react'
import ToHit from './ToHit'

export default class ToHitList extends Component {
  renderToHit = () => {
    return this.props.hitChances.reverse().map(h => {
      return <ToHit calculation={h} />
    })
  }
  
  render() {
    return (
      <div>{this.renderToHit()}</div>
    )
  }
}