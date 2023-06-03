import React, { Component } from 'react'

const mystyle={
    border:"1px solid black",
    backgroundColor:"green",
    fontSize:"30px",
}

class SuccessCondition extends Component {
  render() {
    return (
      <div>
        <p style={mystyle}>Aravind Winner</p>
      </div>
    )
  }
}
export default SuccessCondition;
