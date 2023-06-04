import React,{Component} from "react";
import SuccessComp from "../../Conditionals/SuccessComp";
import FailedComp from "../../Conditionals/FailedComp";

class ClassState extends Component{
    constructor(){
    super();
    this.state={
        name:"laxman",
        age:26,
    };

    }
    render(){

        return (
            <div>
            <h2>ClassState</h2>
        <h1 onClick= {()=>this.setState({name:"Ram",age:"24"})}>{this.state.name} got job at the age of {this.state.age}and{" "}
        {this.state.isSuccess ? <SuccessComp/>:<FailedComp/>}</h1>
        </div>
        )
    }

    
}
export default ClassState;