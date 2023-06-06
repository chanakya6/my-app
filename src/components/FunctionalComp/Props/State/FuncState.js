import React,{useState} from "react";

const FuncState=()=>{

    const [name,setName]=useState("Indu");
    const [age,setAge]=useState(30)
    return (
    <div>
     <h2>FuncState</h2>
    <h1 onClick={()=>setName("sita",setAge(26))}>{ name } got job at the age of {age}</h1>
        </div>

    )
}
export default FuncState;