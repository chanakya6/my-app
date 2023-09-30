import React,{useState} from "react";  

const StateCompo = () =>{
    const [name,SetName] = useState("raji")
    return <h1 onClick={()=>SetName("Samineni")}>{name}Functional State Components</h1>
}
export default StateCompo;