import React,{useState} from "react";

function FuncState1(){
    const [name, setname]=useState("Aravind");
    const [age, setage]=useState("20");
    
    return(
        <div>
            <h1 onMouseOver={()=>{
                setname("Annaldas");
                setage(21);
            }}
                onMouseOut={()=>{
                setname("Aravind");
                setage(20);
            }}
            >
                {name} this is my name{age}
            </h1>
        </div>
    )
};

export default FuncState1;