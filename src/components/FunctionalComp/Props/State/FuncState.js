import React,{useState} from "react";

const FuncState=()=>{

    const [name,setName]=useState("Indu");
    
    return (
    <div>
     <h2>FuncState</h2>
    <h1 onClick={()=>setName("sita")}>{ name } got job</h1>
        </div>

    )
}
export default FuncState;