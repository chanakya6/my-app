//step-1: import neccessary package
//step-2 :create a class with className
//step-3: render()method is a mandatory in class comp which returns HTML
//step4: export to re-use in other components

import React, { Component } from "react";
import ClassProps from "./Props/ClassProps";
import ClassState from "./States/ClassState";
// import "./ClassApp.css";

class ClassApp extends Component {
  render() {
    return (
      <div>
        <ClassProps name="Sheshugoud" age="40" isSuccess={true} />
        {/* <ClassProps name="Sowjanya" />
        <ClassProps name="Manikanta" />
        <ClassProps name="Seshareddy" />
        <ClassProps name="Neelima" age="30" />
        <ClassProps name="Arvind" />
        <ClassProps name="Chandu" />
        <ClassProps name="Chanakya" /> */}
        <ClassState />
      </div>
    );
  }
}

export default ClassApp;
