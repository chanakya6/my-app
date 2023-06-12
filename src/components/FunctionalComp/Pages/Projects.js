import React, {useState,useEffect} from 'react' ;
import {Table} from "react-bootstrap";
import axios from "axios";

const Projects = () => {
        const [result,setResult]=useState([]);
        useEffect( ()=>{

          getTodoData();

        },[]);
        const getTodoData = async ()=>{
          let response = await axios.get("https://jsonplaceholder.typicode.com/todos")
          setResult(response.data);
        };
  return (
   <Table striped variant='dark' size='sm'>
   <thead>
      <tr>
        <td>S.no</td>
        <td>userId</td>
        <td>Todo Title Name</td>
        <td>isCompleted</td>
      </tr>
   </thead>
   <tbody>
    {result.length>0?(
      result.map((eachTodo)=>(
        <tr key = {eachTodo.id}>
          <td>{eachTodo.id}</td>
           <td>{eachTodo.userId}</td>
            <td>{eachTodo.title}</td>
             <td>{eachTodo.completed ? "yes" : "no"}</td>
        </tr>
      ))):(
        <tr>
          <td colSpan={4} style={{textAlign:"center"}}>
           No Data Available
          </td>
        </tr>
      )}
   </tbody>
   </Table>
  )
}

export default Projects