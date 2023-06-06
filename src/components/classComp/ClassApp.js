import React, {Component} from 'react'; 
 import  './ClassApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassProps from './Props/ClassProps';



class ClassApp extends Component{
    render(){
        return <ClassProps name="saritha"/>
    }
}

export default ClassApp;