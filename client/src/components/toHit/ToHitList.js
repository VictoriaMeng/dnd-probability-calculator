import React, { Component } from 'react'
import ToHit from './ToHit'

export default class ToHitList extends Component {
  renderToHit = () => {
    debugger;
    return this.props.hitChances.map(h => {
      // debugger;
      return <ToHit calculation={h} />
    })
  }
  
  render() {
    return (
      <div>{this.renderToHit()}</div>
    )
  }
}