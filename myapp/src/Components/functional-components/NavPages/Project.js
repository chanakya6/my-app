import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Project() {
    const[result,setResult] = useState([]);
    const getTodoData =async () =>{
        let response = await axios.get("http://localhost:3001/todos");
        setResult(response.data)
    }
    const CreateNewRecord =  async ()=>{
        let newrecord = {
            userId: 1,
            title:"not completed task",
            Completed:false,
         }
         let response = await axios.post("http://localhost:3001/todos",newrecord);
         setResult(response.data);
         console.log(response.data);
         getTodoData();

    }
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Is Completed</td>
                </tr>
            </thead>
            <tbody>
              {
                result.length > 0 ?(
                    result.map((eachTodo)=>{
                        return(
                            <tr key={eachTodo.id}>
                                 <td>{eachTodo.userId}</td>
                                <td>{eachTodo.id}</td>
                                <td>{eachTodo.title}</td>
                                <td>{eachTodo.iscompleted ? 'Yes' :'No'}</td>
                            </tr>
                        )

                    })
                ):
                (
                    <tr>
                        <td colSpan={"4"} style={{textAlign:"center"}}>NO DATA AVAILIABLE</td>
                    </tr>
                )}
            </tbody>
        </Table>
        <Button onClick={CreateNewRecord}>Create A New Record</Button>
    </div>
  )
}

export default Project