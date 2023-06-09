import React, { Component } from 'react'
const myStyle ={
    height : "250px",
    border : "2px solid black",
    backgroundColor : "green",
    color : "lightgreen",
};
export default class SuccessComp extends Component {
  render() {
    return <div style={myStyle}>SuccessComp</div>;
  }
}
