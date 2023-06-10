import React, { useState } from "react";
import "./Pages.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const EditTodo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, userId, title, isComplete } = location?.state;

  const [userIdcard, setUserIdcard] = useState(userId || "");
  const [titleText, setTitleText] = useState(title || "");
  const [complete, setComplete] = useState(isComplete || false);
  const [errorText, setErrorText] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    let newRow = {
      userId: userIdcard,
      title: titleText,
      completed: complete,
    };
    await axios
      .put(`http://localhost:3001/todos/${id}`, newRow)
      .then((jsonData) => {
        if (jsonData.status === 200) {
          setErrorText("");
          navigate("/Projects");
        }
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  return (
    <div className="editTodo">
      <Form
        onSubmit={submitForm}
        style={{ margin: "0px auto", maxWidth: "35%" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserId</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter UserId"
            name="UserId"
            value={userIdcard}
            onChange={(event) => {
              setUserIdcard(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Todo"
            name="title"
            value={titleText}
            onChange={(event) => {
              setTitleText(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="isComplete"
            checked={complete}
            onChange={(event) => {
              setComplete(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {errorText && <h1>{errorText}</h1>}
      </Form>
    </div>
  );
};

export default EditTodo;
