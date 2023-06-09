import React,{Component} from "react";
// import ClassProps from "./Props/ClassProps";
import ClassState from "./States/ClassState";
class ClassApp extends Component {
    render(){
        return (
            // <ClassProps name="hussain" age={22} Boolean="true"/>
            <div>
                <ClassState/>
            </div>
        )
    }
}
export default ClassApp;