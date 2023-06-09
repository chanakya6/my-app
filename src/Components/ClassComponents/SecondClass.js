import React, { Component } from "react";
import ClassProps from "./Props/ClassProps";
// const MyStyle= {color:"blue"}
class SecondClass extends Component{
render() {
    // return <h1 style={MyStyle}>I AM..</h1>;
    return (
        <div>
            <ClassProps name="hussain" age="23" isSuccess= {true}/>
        </div>
    );
}
}
export default SecondClass;
