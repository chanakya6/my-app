import React,{useState} from 'react';
// import {Form,Button} from "react-bootstrap";
import "./FormFunc.css";

const FormFunc = () => {
    const [emailAddress, setEmailAddress]=useState('');
    const [passwordAddress, setPasswordAddress]=useState('');

    const onSubmitFunc=(event)=>{
        event.preventDefault();
        !emailAddress && !passwordAddress 
        ? alert("please enter the email and password") : alert(emailAddress);
    }
  return (
    <div>
        <form className='form' onSubmit={onSubmitFunc}>
            <div className='log'>Login Form</div><br/>
            <div>
                <label htmlFor='email'>E-mail: </label><br/>
                <input type="email" name="emailAddress" id="email" onChange={(event)=>setEmailAddress(event.target.value)}/>
            </div><br/>
            <div>
                <label htmlFor='password'>Password: </label><br/>
                <input type="password" name="passwordAddress" id="password" onChange={(event)=>setPasswordAddress(event.target.value)}/>
            </div><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormFunc;