import React,{Component} from "react";

class ClassProps extends Component{

    render(){
        return (
        
            <div>
        <h1>Class props</h1>
        <h1>{this.props.name} age of the boy{this.props.age} ph number: {this.props.number}</h1>
        </div>
    )
}
}
export default ClassProps;