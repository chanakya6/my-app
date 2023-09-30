import axios from 'axios';
import React from 'react';
import { useState } from 'react';


import {useNavigate } from 'react-router-dom';

function VerificationPage() {
  
  const[verificationcode,setverificationCode]  = useState("");
 // const[verificationStatus,setVerificationStatus] = useState('');
 const navigate = useNavigate();

  const verfiyCode = async (event)=>{
    event.preventDefault();
    
    try{
      const response = await axios.post("https://test.e-prathibha.com/apis/verifyEmail",{
        reg_code:verificationcode,
      })
      console.log(response.data);
      if(response.data.status===200){
         navigate('/loginpage')
      }
      else{
        alert("correct valid code");
      }
    }
    catch(error){
      console.log("error");
    }

  }
  return (
    <div>
      <form onSubmit={verfiyCode}>  
        
        <label value={verificationcode} onChange={(event)=> setverificationCode(event.target.value)}>Verification code:
        
          <input type='text' placeholder='enter your verification code here'/>
        </label><br></br><br></br>
        <button type='submit' >
          Submmit
        </button>
      </form>
    </div>
  )
}

export default VerificationPage;