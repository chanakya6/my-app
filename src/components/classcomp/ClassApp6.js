import React,{Component} from "react";
import ClassProps from "./Props/ClassProps";

class ClassApp6 extends Component{
    render(){
        return(
            <div>
                <h1><ClassProps name="Aravind" age={20} place="godavarikhani"/></h1>
            </div>
        )
    }
}

export default ClassApp6;