import React, { Component } from "react";
import SuccessComp from "../Conditionals/SuccessComp";
import FailedComp from "../Conditionals/FailedComp";

class ClassProps extends Component {
  constructor() {
    super();
    console.log(this);
  }
  render() {
    return (
      <h1>
        {this.props.name} age is {this.props.age} and{" "}
        {this.props.isSuccess ? <SuccessComp /> : <FailedComp />}
      </h1>
    );
  }
}

export default ClassProps;
