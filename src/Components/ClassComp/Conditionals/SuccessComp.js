import React, { Component } from 'react'
const myStyle = {
    height: '30spx',
    border: '2px solid',
    backgroundColor:'red',
    color: 'white',
    width: '200px',
    padding :'10px'
}
class SuccessComp extends Component {
     
  render() {
    return (
      <div style={myStyle}>SuccessComp</div>
    )
  }
}
export default SuccessComp;
