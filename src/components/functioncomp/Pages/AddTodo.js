import React, { useState } from "react";
import "./Pages.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    let newRow = {
      userId: userId,
      title: title,
      completed: isComplete,
    };
    let jsonData = await axios.post(" http://localhost:3001/todos", newRow);
    console.log(jsonData);
    if (jsonData.status === 201) {
      navigate("/Projects");
    }
  };

  return (
    <div className="addTodo">
      <Form
        onSubmit={submitForm}
        style={{ margin: "0px auto", maxWidth: "35%" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserId</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter UserId"
            name="userId"
            onChange={(event) => {
              setUserId(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Todo"
            name="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="isComplete"
            onChange={(event) => {
              setIsComplete(event.target.checked);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
