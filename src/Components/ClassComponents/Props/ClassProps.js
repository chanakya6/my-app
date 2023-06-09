import React, { Component } from "react";
import SuccessComp from "../Conditional/SuccessComp";
import FailedComp from "../Conditional/FailedComp";

class ClassProps extends Component{
    constructor(){
        super ();
        console.log(this);
    }
    render() {
        return (
        <h1> { this.props.name} age is {this.props.age} 
         {this.props.isSuccess ? <SuccessComp/> : <FailedComp />} 
        </h1>
        );
    }
}
export default ClassProps;