import React, { Component } from 'react'
const myStyle = {
    height: '30spx',
    border: '2px solid',
    backgroundColor: 'blue',
    color: 'white',
    width: '300px',
    padding:'15px'
}
export default class FailedComp extends Component {
  render() {
    return (
      <div style={myStyle}>FailedComp</div>
    )
  }
}
