import React, { Component } from 'react'
const myStyle={
    height : "250px",
    border : "2px solid black",
    backgroundColor : "red",
    color : "blue",
};
export default class FailedComp extends Component{
    render() {
        return <div style={myStyle}> FailedComp </div>;
    }
}