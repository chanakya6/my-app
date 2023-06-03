import React, { Component } from 'react'

const mystyle={
    border:"1px solid black",
    backgroundColor:"red",
    fontSize:"30px",
}

class FailCondition extends Component {
  render() {
    return (
      <div>
        <p style={mystyle}>Aravind Looser</p>
      </div>
    )
  }
}
export default FailCondition;
