import React from "react";
import { Button } from "react-bootstrap";
//import { useState } from "react";
//import { Button } from 'react-bootstrap';
import { increment,decrement  } from '../Action';
import { useDispatch,useSelector } from 'react-redux';

const AssingmentCom =() =>{
   // const [counter,setCounter] = useState(0);
    const dispatch = useDispatch();
    const counterData = useSelector((state)=>state.counterReducer.counter);
    return(
        <div style={{display:"flex"}}>
            <div >
           <Button onClick={()=>dispatch(increment(15))}>increment by15</Button><br></br>
           <Button  onClick={()=>{dispatch(increment(5))}}>increment by 5</Button><br></br>
           <Button  onClick={()=>{dispatch(increment(10))}}>increment by 10</Button><br></br>
           <div><strong>{counterData}</strong></div>
        </div>
        <div> 
        <Button  onClick={()=>dispatch(decrement(5))}>Decrement by5   </Button><br></br>
           <Button  onClick={()=>dispatch(decrement(2))}>Decrement by 2   </Button><br></br>
           <Button  onClick={()=>dispatch(decrement(1))}>Decrement by1   </Button><br></br>
        </div>
           

        </div>
    )}
    export default AssingmentCom;