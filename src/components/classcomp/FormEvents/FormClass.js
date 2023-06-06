import React, { Component } from 'react';
// import {Form,Button} from "react-bootstrap";
import "./FormClass.css";


class FormClass extends Component {
    constructor(){
        super();
        this.state={
            emailAddress:'',
            passwordAddress:'',
        };
    }
    /* onChangeClass(event){
        this.setState({[event.target.name]:event.target.value});
    } */
    onChangeClass=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    };
    onSubmitClass=(event)=>{
        event.preventDefault();
        !this.state.emailAddress && !this.state.passwordAddress 
        ? alert("please enter the email and password") : alert(this.state.emailAddress);
    };
  render() {
    return (
        <form className='form' onSubmit={this.onSubmitClass}>
            <div className='log'>Login Form</div><br/>
            <div>
                <label htmlFor='email'>E-mail: </label><br/>
                <input type="email" name="emailAddress" id="email" onChange={/* this.onChangeClass=this.onChangeClass.bind(this) */ this.onChangeClass}/>
            </div><br/>
            <div>
                <label htmlFor='password'>Password: </label><br/>
                <input type="password" name="passwordAddress" id="password" onChange={/* this.onChangeClass=this.onChangeClass.bind(this) */ this.onChangeClass}/>
            </div><br/>
            <button>Submit</button>
        </form>
    )
  }
}

export default FormClass;



