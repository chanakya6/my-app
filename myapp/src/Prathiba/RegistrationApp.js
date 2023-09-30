//import { Toast } from 'bootstrap';
import axios from 'axios';

import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
//debugger

const RegisterApp =()=> {
  const[email,setEmail] = useState("");
  
  const [phone,setPhone] = useState("");
  const[password,setPassword] = useState("");
  const[confirmpassword,setConfirmPassword] = useState("");
  const[name,setName] = useState("");
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try
    {
      const formData = new FormData();
      formData.append('email',email);
      formData.append('name',name);
      formData.append('phone' ,phone);
      formData.append('paaword',password);
      formData.append('confirmpassword',confirmpassword);
      if(password!==confirmpassword){
        alert("enter correct password");
      }

      const response = await axios.post("https://test.e-prathibha.com/apis/register" ,formData,{
         'Content-Type':'multipart/form-data'
        })
        console.log(response.data);
        if(response.ok){
          navigate('/verificationPage');

        }
        else{
          let err = response.data
          setError(err.data);
          alert(err.data);
        }
      if(response.data.status===200){
        navigate('/verificationPage')
      }
    }
    catch{
      console.log(Error,error);
    }
  }
  
  return (

    <div>
        <form onSubmit={handleSubmit}>
            <label> User Name:
            <input type='text' placeholder='enter your user name'
            value={name} onChange={(event)=>{setName(event.target.value) 
              }}/>
            </label><br></br><br></br>
            <label> Email:
            <input type='email' placeholder='abcd@gmail.com' value={email } 
            onChange={(event)=>{setEmail(event.target.value)}}/>
            </label><br></br><br></br>
            <label> Phone-No:
            <input type="phoneno" placeholder='+91 6776286989' value={phone}
            onChange={(event)=>setPhone(event.target.value)}/>
            </label><br></br><br></br>
            <label> Password:
            <input type="password" placeholder='create a password'  value={password}
            onChange={(event)=>{setPassword(event.target.value)}}/>
            </label><br></br><br></br>
            <label>  Re-enter Password:
            <input type="password" placeholder='reenter your password'  value={confirmpassword}
            onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
            </label><br></br><br></br>
            
            <button type="submit" >Submmit</button>
            
        </form>
    </div>
  )
}

export default RegisterApp;