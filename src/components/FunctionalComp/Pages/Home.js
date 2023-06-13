import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const counterData = useSelector((state) => state.counterReducer.counter);
  return (
    <div>
      <h1>Current Counter Data: {counterData}</h1>
      <Button onClick={() => dispatch(increment(6))}>Increment</Button>
    </div>
  );
};

export default Home;
