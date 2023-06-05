import React,{Component} from "react";
class ClassState extends Component{
    constructor(){
        super();
            this.state={
                name:"raji"
            }
    }
   render(){
    return <h1 onClick={()=>this.setState({ name:"sulochana"})}>{this.state.name}hiiii</h1>
   }
}
export  default ClassState;
