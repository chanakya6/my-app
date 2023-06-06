import React,{Component} from "react";
// import "./ClassApp.css";
// import ClassProps from './Props/ClassProps';
import ClassState from '../ClassComp/Props/State/ClassState';

class ClassApp1 extends Component {
    render(){
        // return <ClassProps name ="Ram" age="21" number="9948077521"/>
        // return <p className="c"> ICON of the REACT-JS</p>
       return (
    
       <ClassState isSuccess={true}/>
       
       )
    }
}
export default ClassApp1;