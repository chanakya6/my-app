import React from 'react';
//import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { increment,decrement , nameChangeReducer } from '../Action';
import { useDispatch,useSelector } from 'react-redux';

const CounterCom = () =>  {
    //const [counter,setCounter] = useState(0)
    const dispatch = useDispatch();
    const counterData = useSelector((state)=>state.counterReducer.counter);
    const nameChangeData = useSelector((state)=>state.nameChangeReducer.name);
  return (
    <div>
        <Button onClick={()=>dispatch(increment(2))}>Increment</Button>
        <span>
            <strong>{counterData}</strong>
        </span>
        <Button onClick={()=>dispatch(decrement(4))}>Decrement</Button>
        <h1 onClick={()=>{dispatch(nameChangeReducer("sulochana"))}}>{nameChangeData}</h1>
    </div>
  )
}

export default CounterCom;