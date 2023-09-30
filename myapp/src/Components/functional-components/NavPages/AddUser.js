import axios from 'axios';
import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

 const  AddUser= () =>{
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [Completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    const createNewRecord= async(event)=>{
        event.preventDefault();
           let  newRecord = {
            userId: userId,
            title:title,
            Completed:Completed,
           }
        let response = await axios.post("http://localhost:3001/todos",newRecord);
        console.log(response);
        if (response?.status === 200) {
            navigate("/project");
          }
    }
  return (
    <div>
        <Form onSubmit={createNewRecord} style={{maxWidth:"40%",marginLeft:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicUserId" >
        <Form.Label>UserID</Form.Label>
        <Form.Control type="number" placeholder="Enter user id" name="userId"
         onChange={(event)=>setUserId(event.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="Todo" >
        <Form.Label>Add Todo</Form.Label>
        <Form.Control type="text" placeholder="enter your task"  name="title" 
        onChange={(event)=>setTitle(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="is completed"  name ="compelted" 
        onChange={(event)=>setCompleted(event.target.checked)}/>
      </Form.Group>
      <Button variant='primary'>Submmit</Button>
      </Form>
    </div>
  )
}

export default AddUser;