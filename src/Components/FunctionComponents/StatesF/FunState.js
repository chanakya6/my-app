import React,{useState} from "react";
const FunState =() => {
    const[name,setName]=useState("basha");
    const[age,setAge]=useState(23);

    return <h1 onClick={() => {setName("hussain"); setAge(25)}} >{name} age is {age}</h1>
};
export default FunState;