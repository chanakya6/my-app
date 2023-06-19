import React, { useState } from 'react';
import "../../ClassComponents/FormsEvents/FormClass.css";
const fruits = ['Apple','Banana','Watermelon','Orange','grapes'];
const FormFunc = () => {
    const [emailAdd, setEmailAdd] = useState("");
    const [password, setPassword] = useState("");
    const [fruitsDropDown, setFruitsDropDown] = useState("Apple");
    const [notRobot,setnotRobot] = useState(false);
    const onSubmitFunc =(event) => {
      event.preventDefault();
      !emailAdd && !password ? alert("empty values") : alert(emailAdd);
      !fruitsDropDown  ? alert("empty values") : alert(fruitsDropDown);
    };
  
  return (
    <form className='formContainer' > 
            <div className='inputContainer'>
            <label htmlFor='emailAdd'>Email</label>
            <input type="email" name="emailAdd" id="emailAdd" onChange={(event)=>setEmailAdd(event.target.value)}/> 
            </div>
            <br/>
            <div className='inputContainer'>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password" onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <br/>
            <div>
              <select value={fruitsDropDown} onChange={(event)=>setFruitsDropDown(event.target.value)}>
                {
                  fruits.map((option,index) => {
                    return<option  key={index}>{option}</option>
                  })
                }
              </select>
            </div>
            <div>
              <input type='checkbox' name="notRobot" id ="notRobot" checked={notRobot} onChange={(event)=>setnotRobot(event.target.checked) }/> i am not robot
            </div>
            
            <button > Submit</button>
        </form>
  )
}

export default FormFunc;