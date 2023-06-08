import React, { Component } from "react";
import "./ClassApp.css";
import ClassProps from './Props/ClassProps';
import ClassStates from './State/ClassState';
import SuccessComp from './Conditionals/SuccessComp';
import FailedComp from './Conditionals/FailedComp';

class ClassApp extends Component{
    render() {
        return (<div>
            {/* <h1 className="h1Elt">Class App Components</h1> */}
        {/* //     <ClassProps name="Neelima" /> */}
        {/* //     <ClassProps name="neelu" /> */}
        {/* //     <ClassProps name="somishetty" /> */}
            <ClassProps name="somishetty neelima" age={30} student="true" isSuccess={false} />
        {/* //     <ClassStates /> */}
            <FailedComp />
            <SuccessComp /></div>
        )
            
    }
}
export default ClassApp; 