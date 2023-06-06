import React, {Component} from "react";

class ClassProps extends Component{
    constructor(){
        super();
        console.log(this);


    }
    render() {
        return <h1>{this.props.name}</h1>
    }

}

export default ClassProps;