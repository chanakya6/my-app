
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Prathiba.css';
import axios from 'axios';

const  LoginPage = () =>
{
    const[email,setEmail] = useState("");
    const[password,setPassword]= useState("");
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const loginHandler = async (event) =>{
        event.preventDefault();
        const formData  = new FormData();
        formData.append('email',email);
        formData.append('password',password);


        try{
        const response = await fetch("https://test.e-prathibha.com/apis/login",formData,{method:'POST'});
        console.log(response);
        if(response.ok){
          
          navigate('/freeeamlist');
        }
        //else{
          //let err=response.data;
          //setError(err.data)
         // alert(err.data);
        //}
      }
      catch{
        console.error(error);
       
      }
    }
  return (
    <div>
        <form >
            <label> Enter Your E-mail
            <input type= "email" placeholder='enter your email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            </label><br></br><br></br>
          <label>Enter Yor Password
          <input type="password"placeholder='enter your password' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
          </label><br></br><br></br>
            <button type="button" onClick={loginHandler}>Log-In</button>
            <Link to = {'/RegisterApp'}>Register Here</Link>
        </form>
    </div>
  )
  }

export default LoginPage;