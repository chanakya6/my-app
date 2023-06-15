import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../Redux/Action';

const ReduxHome = () => {
  const dispatch  =  useDispatch();
  const counterData = useSelector((state)=>state.counterReducer.counter)
  return (
    <div>
      <h1> counter data is {counterData}</h1>
      {/*<Button onClick={()=>dispatch(increment(4))}>Increment</Button>*/}
    </div>
  )
}

export default ReduxHome;