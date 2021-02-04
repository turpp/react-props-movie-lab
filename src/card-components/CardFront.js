import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="card-front" style={this.props.style}>
      </div>
    )
  }
}
