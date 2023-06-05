import React from "react";
import { useState } from "react";

const FormFun3=() =>{

    const [emailAdd,setEmailAdd] = useState('');
    const[password,setPassword] = useState('');

   const  onSubmitFun = (event) =>{
        event.preventDefault();
        !emailAdd&&!password ? alert('empty value') :alert(emailAdd)
    }
    return (
    <form onSubmit={onSubmitFun}>
   
 <label htmlFor="emailAdd"> email
     <input type="email" name="email" id="emailAdd" onChange={(event) =>setEmailAdd(event.target.name)} />
     
 </label><br></br> 
 <br></br> 
 <label htmlFor="password">passward
 <input type="password" name="passward" id="password" onChange= {(event)=>setPassword(event.target.value)} />
 
 </label><br></br>
 <button>Submit</button>
</form>

)}
export default FormFun3;