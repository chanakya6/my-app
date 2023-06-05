import React, { useState } from "react";

const FormFun4=()=>{
    const [emailAdd,setEmailAdd] = useState('');
    const[password,setPassword] = useState('');
    const[name,setName] = useState('');
    const[phoneno,setPhoneno]=useState('');
    const[date,setDate] = useState('');

    const  onSubmitFun = (event) =>{
        event.preventDefault();
        !emailAdd&&!password ? alert('empty value') :alert(emailAdd)
    }
    return(

        <form style={{padding:"50px",alignContent:"center"} } >
        <label>User Name
            <input type="name" name="name" id="name" onChange= {(event)=> setName(event.target.name)} />
        </label><br></br><br></br>
        <label>phone-No
            <input type="tel" name="phoneno" id="phoneno" onChange= {(event)=>setPhoneno(event.target.phoneno) }/>
        </label><br></br><br></br>
        <label>E-Mail
            <input type="email" name="emailAdd" id="emailAdd" onChange= {(event)=>setEmailAdd(event.target.value) }  />
        </label><br></br><br></br>
        <label>Date of Birth
            <input type="date" name="date" id="date"  onChange= {(event)=>setDate(event.target.value) }/>
        </label><br></br><br></br>
        <label>passward
            <input type="password" name="password" id="password" onChange= {(event)=>setPassword(event.target.value)}/>
        </label><br></br><br></br>
        <button>Submit</button>
    </form>
)
    
}
export default FormFun4;