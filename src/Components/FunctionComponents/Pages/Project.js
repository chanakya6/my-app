import React, { useState,useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
const Project = () => {
  const [result,setResult] = useState([]);
  // const [counter, setCounter] = useState();
  useEffect(() =>{
    getTodoData();
  },[]);
  const getTodoData= async() =>{
    let response=await axios.get('https://jsonplaceholder.typicode.com/todos');
    setResult(response.data);
  };
    const createNew = async() => {
    let newRecord ={ userId:2,
      title:'hussain',
      completed:true,
    };
     let response = await axios.post('https://jsonplaceholder.typicode.com/todos',newRecord);
      console.log(response);
      getTodoData();
    };
  return (
    <div>
      <Button onClick= {()=>{createNew()}}>add new</Button>
    <Table striped variant="dark" size="sm">
      <thead>
        <tr>
          <td>sno</td>
          <td>user id</td>
          <td>todo task name</td>
          <td>completed</td>
        </tr>
      </thead>
      <tbody>
        {result.length>0 ?(
          result.map((eachTodo,index) =>(
            <tr key={eachTodo.id}>
          <td>{eachTodo.id}</td>
          <td>{eachTodo.userId}</td>
          <td>{eachTodo.title}</td>
          <td>{eachTodo.completed ? "yes":"no"}</td>
        </tr>
          ))
        ):(
        <tr>
          <td colSpan={4} style={{textAlign:"center"}}>No Data</td>
          </tr>
        )};
        

      </tbody>

    </Table>
    </div>
  );
}

export default Project;