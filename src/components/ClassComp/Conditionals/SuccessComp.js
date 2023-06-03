import React, { Component } from "react";

const myStyle = {
  height: "300px",
  border: "2px solid",
  backgroundColor: "green",
  color: "red",
};
class SuccessComp extends Component {
  render() {
    return <div style={myStyle}>SuccessComp</div>;
  }
}
export default SuccessComp;
