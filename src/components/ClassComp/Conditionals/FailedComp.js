import React, { Component } from "react";

const myStyle = {
  height: "300px",
  border: "2px solid",
  backgroundColor: "red",
  color: "yellow",
};
export default class FailedComp extends Component {
  render() {
    return <div style={myStyle}>FailedComp</div>;
  }
}
