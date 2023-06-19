import React, { Component } from 'react'
// import { Form, Button } from 'react-bootstrap';
import './FormClass.css';

 class FormsClass extends Component {
  constructor(){
    super();
    this.state={
      emailAdd:"",
      password:"",
    };
    // this.onChangeFunc = this.onChangeFunc.bind(this);
  }
   onChangeFunc = (event) =>{ 
    this.setState({[event.target.name] : [event.target.value]})    
  };
  onSubmitFunc =(event) =>{
    event.preventDefault(); //synthic events browser will listion to user not by own
    !this.state.emailAdd && !this.state.password ? alert('empty value') :alert(this.state.emailAdd);
  };
  render() {
    return (
        <form className='formContainer' onSubmit={this.onSubmitFunc}>
            <div className='inputContainer'>
            <label htmlFor='emailAdd'>Email</label>
            <input type="email" name="emailAdd" id="emailAdd" onChange={this.onChangeFunc}/>
            </div>
            <br/>
            <div className='inputContainer'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password'onChange={this.onChangeFunc}/>
            </div>
            <br/>
            <button > Submit</button>
        </form>
    )
  }
}
export default FormsClass;