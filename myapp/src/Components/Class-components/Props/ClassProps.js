import React,{Component}from "react";
import SuccessCond from "../Conditions/Successcond";
import FailedCond from "../Conditions/Failedcond";
class ClassProps extends Component{
   constructor(){
    super();
    console.group(this);
   }
   render(){
    return(
    <h1>
        {this.props.name} age is{this.props.age} and{" "} {this.props.isSuccess ? <SuccessCond /> :<FailedCond/>}
    </h1>
    );
   }
}
export default ClassProps;