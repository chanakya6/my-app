import React,{Component} from "react";
//import './ClassApp.css';
import ClassProps from "./Props/ClassProps";
import ClassState from "./State-Components/ClassState";
class ClassApp extends Component{
    render(){
        return<div>
            <ClassProps name="Sulochana" age="23"  isSuccess={false}/>
            <ClassState/>
        </div>
    }
}
export default ClassApp;