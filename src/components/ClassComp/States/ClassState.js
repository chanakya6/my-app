import React, { Component } from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Chanakya",
      age: 30,
    };
  }
  render() {
    return (
      <h1 onClick={() => this.setState({ name: "Manikanta", age: 45 })}>
        {this.state.name} Class State Component and age is {this.state.age}
      </h1>
    );
  }
}

export default ClassState;
