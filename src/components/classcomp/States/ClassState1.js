import React, { Component } from "react";

class ClassState1 extends Component{
    constructor(){
        super();
        this.state={
            Name:"aravind",
            Age:"20",
            Place:"GDK"
        }
    }
    render(){
        return(
            <div>
                <h1 onMouseOver={()=>this.setState({Name:"annaldas",Age:"21"})} onMouseOut={()=>this.setState({Name:"aravind",Age:"20"})}>My name is : {this.state.Name} and age is : {this.state.Age}</h1>
            </div>
        )
    }
}

export default ClassState1;