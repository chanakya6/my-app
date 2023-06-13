import React from "react";
import { Button } from "react-bootstrap";
import { increment, decrement, nameChange, fetchTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CounterComp = () => {
  const counterData = useSelector((state) => state.counterReducer.counter);
  const nameChangeData = useSelector((state) => state.nameChangeReducer.name);
  const todoData = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 onClick={() => dispatch(nameChange("Manikanta"))}>
        {nameChangeData}
      </h1>
      <Button onClick={() => dispatch(increment(3))}>Increment</Button>
      <span>
        <strong>{counterData}</strong>
      </span>
      <Button onClick={() => dispatch(decrement(4))}>Decrement</Button>
      <div>
        <h1>Todo List Count {todoData.length}</h1>
        <Button onClick={() => dispatch(fetchTodos())}>
          Fetch Todos Count
        </Button>
      </div>
    </div>
  );
};

export default CounterComp;
