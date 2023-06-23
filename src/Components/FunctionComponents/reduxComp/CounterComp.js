import React from 'react'
import { Button } from 'react-bootstrap';
import {increment,decrement} from '../Redux/Actions';
import { useDispatch,useSelector } from 'react-redux';

const CounterComp = () => {
  const counterData = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Increment</Button><span><strong>{counter}</strong></span> 
      <Button onClick={()=> dispatch(decrement())}>Decrement</Button>
    </div>
 );
};

export default CounterComp;