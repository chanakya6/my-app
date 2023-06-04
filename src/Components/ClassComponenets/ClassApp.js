import React,{Component} from "react";
import ClassProps from "./Props/ClassProps";
class ClassApp extends Component {
    render(){
        return (
            <ClassProps name="Bhavya" age={22} Boolean="true"/>
        )
    }
}
export default ClassApp;