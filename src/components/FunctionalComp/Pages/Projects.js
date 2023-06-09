import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const Projects = () => {
  const [result, setResult] = useState([]);
  // const [counter1, setCounter1] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getTodoData();
  }, [result]);

  const getTodoData = async () => {
    let response = await axios.get(" http://localhost:3001/todos");
    setResult(response.data);
  };
  // const createNewRecord = async () => {
  //   let newRecord = {
  //     userId: 1,
  //     title: "Chanakya has to finish reactjs class",
  //     completed: false,
  //   };

  //   let response = await axios.post(" http://localhost:3001/todos", newRecord);
  //   console.log(response);
  //   getTodoData();
  // };

  const deleteRecord = async (todoId) => {
    let response = await axios.delete(`http://localhost:3001/todos/${todoId}`);
    console.log(response);
    getTodoData();
  };

  // const putRecord = async (todoId) => {
  //   let updateRecord = {
  //     title: "Chanakya has to finish reactjs and redux class",
  //     completed: false,
  //   };

  //   let response = await axios.put(
  //     `http://localhost:3001/todos/${todoId}`,
  //     updateRecord
  //   );
  //   console.log(response);
  //   getTodoData();
  // };

  // const patchRecord = async (todoId) => {
  //   let updateRecord = {
  //     title: "Manikanta has to finish reactjs and redux class",
  //   };

  //   let response = await axios.patch(
  //     `http://localhost:3001/todos/${todoId}`,
  //     updateRecord
  //   );
  //   console.log(response);
  //   getTodoData();
  // };

  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setCounter1(counter1 + 1);
    //     }}
    //   >
    //     Increment Counter 1
    //   </button>
    //   <h1>Counter1: {counter1}</h1>
    //   <button
    //     onClick={() => {
    //       setCounter2(counter2 + 1);
    //     }}
    //   >
    //     Increment Counter 2
    //   </button>
    //   <h1>Counter2: {counter2}</h1>
    // </div>
    <div>
      <Button
        onClick={() => {
          // createNewRecord();
          // window.location.href = "/addTodo";
          navigate("/addTodo");
        }}
      >
        Add New Record
      </Button>
      <Table striped variant="dark" size="sm">
        <thead>
          <tr>
            <td>SNO</td>
            <td>USERID</td>
            <td>Todo Title Name</td>
            <td>isCompleted</td>
            <td colSpan={4} style={{ textAlign: "center" }}>
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
                    onClick={() =>
                      navigate(`/editTodo/${eachTodo.id}`, {
                        state: {
                          id: eachTodo.id,
                          userId: eachTodo.userId,
                          title: eachTodo.title,
                          isCompleted: eachTodo.completed,
                        },
                      })
                    }
                  >
                    Update
                  </Button>
                </td>
                {/* <td>
                  <Button
                    variant="info"
                    onClick={() => patchRecord(eachTodo.id)}
                  >
                    Update-Patch
                  </Button>
                </td> */}
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
        </tbody>
      </Table>
    </div>
  );
};

export default Projects;
