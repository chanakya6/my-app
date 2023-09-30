import React, { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Project() {
    const [result,setResult] = useState([]);
    const naviagte = useNavigate();
    useEffect  (()=>{
        getTodoData();
        }, []);
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
         const DeleteRecord = async(todoId)=>{
            let response = await axios.delete(`http://localhost:3001/todos/${todoId}`)
            console.log(response)
            getTodoData()
         }
       const putRecord = async (todoId)=>{
        let updateRecord = {
            userId: 1,
                title:"task has  to  complted by tomarrow",
                Completed:false,
             }

        
        let response = await axios.put(`http://localhost:3001/todos/${todoId}`,updateRecord)
        console.log(response)
        getTodoData();
       }
       const patchRecord = async(todoId) =>{
        let response = await axios.patch(`http://localhost:3001/todos/${todoId}`)
        console.log(response);
        getTodoData();

       }

  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
            {result.length > 0 ?(
                    result.map((eachTodo)=>{
                        return(
                        <tr key={eachTodo.id}>
                            <td>{eachTodo.userId}</td>
                            <td>{eachTodo.id}</td>
                            <td>{eachTodo.title}</td>
                            <td>{eachTodo.completed ? 'Yes' :'No'}</td>
                            <td>
                                <Button variant='danger' onClick={()=>DeleteRecord(eachTodo.id)}>Delete</Button>
                            </td>
                           <td><Button variant='warning' onClick={()=>putRecord(eachTodo.id)}>Put</Button></td>
                            <td><Button variant='info'
                            onClick={()=>naviagte(`/editUser/${eachTodo.id}`,
                            {state:{
                              id:eachTodo,
                              userId:eachTodo.userId,
                              title:eachTodo.title,
                              completed:eachTodo.completed ,
                            }})}>Update</Button></td>

                        </tr>);

                    })
                    ):
                (
                    <tr>
                        <td colSpan={"4"} style={{textAlign:"center"}}>NO DATA AVAILIABLE</td>
                    </tr>
                )}
            </tbody>
        </Table>
        <center>
        <Button onClick={()=>//CreateNewRecord()}
        naviagte('/adduser')}>
                Add A  Reacord
            </Button>
        </center>
    </div>
  )
}

export default Project;