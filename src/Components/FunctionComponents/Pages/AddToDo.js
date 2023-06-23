import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddToDo = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle ] = useState('');
  const [isCompleted, setisCompleted] = useState(false);
  const navigate=useNavigate();
  const createNewRecord= async (event)=>{
    event.preventDefault();
      let newRecord={
        userId:userId,
        title:title ,
        completed:isCompleted,
      };
      let response = await axios.post('https://jsonplaceholder.typicode.com/todos', newRecord);
      console.log(response);
      if (response.status === 201) {
        navigate("/project");
      }
  };
  return (
    <Form onSubmit={createNewRecord} style={{marginLeft:'auto',marginRight:'auto',maxWidth:'40%'}}>
      <Form.Group className="mb-3" controlId="formBasicUserId">
        <Form.Label>UserId</Form.Label>
        <Form.Control type="number" placeholder="Enter UserId" name='userId'onChange={(event)=>setUserId(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicToDo">
        <Form.Label>ToDo Title</Form.Label>
        <Form.Control type="Text" placeholder="Enter ToDo" name='title' onChange={(event)=>setTitle(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Is Completed" name='isCompleted' onChange={(event)=>setisCompleted(event.target.checked)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddToDo;