import React,{Component} from "react";
class ClassState extends Component{
    constructor(){
        super();
        this.state={
            name:"hussain",
            age: 25,
        }
    }
    render(){
        return <h1 onClick={() => this.setState({name:"basha", age:23})}>{this.state.name} age is {this.state.age}</h1>
    }
}
export default ClassState;