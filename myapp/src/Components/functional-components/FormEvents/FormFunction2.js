import React, { useState } from "react";
const fruits = ['apple','banana','mango','watermelon']
const FormFun4=()=>{
    const [emailAdd,setEmailAdd] = useState('');
    const[password,setPassword] = useState('');
    const[name,setName] = useState('name');
    const[phoneno,setPhoneno]=useState('phoneno');
    const[date,setDate] = useState('date');
    const[fruitDropdown,setFruitDropdown] = useState('apple');
    const[Human ,setHuman] = useState(true);
    const[error,setError] = useState('')

    const  onSubmitFun = (event) =>{
        event.preventDefault();
        !event.emailAdd?setError("error msg") :setError("");
        !fruitDropdown ? alert('empty value') :alert(fruits);
       

    }
    return(
        <div>

        <form style={{padding:"50px",alignContent:"center"} } onSubmit={onSubmitFun} >
        <label>User Name
            <input type="name" name="name" id="name" value={name} onChange= {(event)=> setName(event.target.name)} />
        </label><br></br><br></br>
        <label>phone-No
            <input type="tel" name="phoneno" id="phoneno" value={phoneno} onChange= {(event)=>setPhoneno(event.target.phoneno) }/>
        </label><br></br><br></br>
        <label>E-Mail
            <input type="email" name="emailAdd" id="emailAdd" value={emailAdd} onChange= {(event)=>setEmailAdd(event.target.value) }  />
        </label><span style={{color:"red"}}>*</span><br></br><br></br>
        <label>Date of Birth
            <input type="date" name="date" id="date" value={date} onChange= {(event)=>setDate(event.target.value) }/>
        </label><br></br><br></br>
        <label>passward
            <input type="password" name="password" id="password" value={password} onChange= {(event)=>setPassword(event.target.value)}/>
        </label><br></br><br></br>
        <div>
    <select value={fruitDropdown}  onChange={(event)=>setFruitDropdown(event.target.value)}>Slect one Fruit
    {
        fruits.map((option,index) =>
        {
            return(<option>{option}</option>)
        }
    )}
    </select>
    </div>
    <div>
        <input type="checkbox" name="Human" value="Human" checked={Human} onChange={(event)=>setHuman(event.target.checked)}/> im Human Being
    </div>


        <button>Submit</button>
        <label style={{color:"red"}}>{error}</label>
    </form>
    
</div>
)
    
}
export default FormFun4;