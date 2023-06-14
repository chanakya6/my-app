import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const Projects = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    getTodoData();
  }, [result]);
  // const getTodoData = async ()=>{
  //   let response = await axios.get("https://jsonplaceholder.typicode.com/todos")
  //   setResult(response.data);
  // };
  const getTodoData = async () => {
    let response = await axios.get("http://localhost:3001/todos");
    setResult(response.data);
  };
  const createNewRecord = async () => {
    let newRecord = {
      userId: 1,
      title: "students need to practice js questions",
      completed: true,
    };
    let response = await axios.post("http://localhost:3001/todos", newRecord);
    console.log(response);
    getTodoData();
  };
  const deleteRecord = async (todoId) => {
    let response = await axios.delete(`http://localhost:3001/todos/${todoId}`);
    console.log(response);
    getTodoData();
  };
  const putRecord = async (todoId) => {
    let updateRecord = {
      title: "students need to practice js questions",
      completed: true,
    };

    let response = await axios.put(
      `http://localhost:3001/todos/${todoId}`,
      updateRecord
    );
    console.log(response);
    getTodoData();
  };
  const patchRecord = async (todoId) => {
    let updateRecord = {
      title: "i need to be practice more",
    };
    let response = await axios.patch(
      `http://localhost:3001/todos/${todoId}`,
      updateRecord
    );
    console.log(response);
    getTodoData();
  };

  return (
    <div>
      <Button
        onClick={() => {
          createNewRecord();
        }}
      >
        Add New Record
      </Button>
      <Table striped variant="dark" size="sm">
        <thead>
          <tr>
            <td>S.no</td>
            <td>userId</td>
            <td>Todo Title Name</td>
            <td>isCompleted</td>
            <td colSpan={5} style={{ textAlign: "center" }}>
              Operations
            </td>
          </tr>
        </thead>
        <tbody>
          {result.length > 0 ? (
            result.map((eachTodo) => (
              <tr key={eachTodo.id}>
                <td>{eachTodo.id}</td>
                <td>{eachTodo.userId}</td>
                <td>{eachTodo.title}</td>
                <td>{eachTodo.completed ? "yes" : "no"}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => putRecord(eachTodo.id)}
                  >
                    update-put
                  </Button>
                </td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => patchRecord(eachTodo.id)}
                  >
                    Update-Patch
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteRecord(eachTodo.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No Data Available
              </td>
            </tr>
          )}
          ;
        </tbody>
      </Table>
    </div>
  );
};

export default Projects;
