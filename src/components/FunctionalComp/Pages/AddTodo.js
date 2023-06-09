import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const navigate = useNavigate();

  const createNewRecord = async (event) => {
    event.preventDefault();
    let newRecord = {
      userId: userId,
      title: title,
      completed: isCompleted,
    };
    let response = await axios.post("http://localhost:3001/todos", newRecord);
    console.log(response);
    if (response.status === 201) {
      navigate("/projects");
    }
  };
  return (
    <Form
      onSubmit={createNewRecord}
      style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "40%" }}
    >
      <Form.Group className="mb-3" controlId="formBasicUserId">
        <Form.Label>UserID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter UserID"
          name="userId"
          onChange={(event) => setUserId(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTodo">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Is Completed"
          name="isCompleted"
          onChange={(event) => setIsCompleted(event.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTodo;
