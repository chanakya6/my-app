import React,{useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
const EditUser = () => {
  const location =useLocation();
  const navigate = useNavigate();
  const{id,userId,title,isCompleted}=location?.state;
  const [userIdCard, setUserIdCard] = useState(userId || "");
  const [titleText, setTitleText ] = useState(title ||"");
  const [Completed, setCompleted] = useState(isCompleted ||false);
  const updateRecord = async(event)=>{
    event.preventDefault();
    let updateRecord ={
      userId:userIdCard,
      title:titleText,
      Completed:Completed,
    };
    let response = await axios.put(` http://localhost:3001/Todo/${id}`,updateRecord);
  
  console.log(response);
  if(response?.status === 200){
    navigate('/projects')
  }
}
  return (
    <Form 
    onSubmit={updateRecord}
     style={{marginLeft:'auto',marginRight:'auto',maxWidth:'40%'}}>
      <Form.Group className="mb-3" controlId="formBasicUserId">
        <Form.Label>UserId</Form.Label>
        <Form.Control type="number" placeholder="Enter UserId" name='userId' value="userIdCard" onChange={(event)=>setUserIdCard(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicToDo">
        <Form.Label>ToDo Title</Form.Label>
        <Form.Control type="Text" placeholder="Enter ToDo" name='title' value="titleText" onChange={(event)=>setTitleText(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Is Completed" name='isCompleted' value="Completed" onChange={(event)=>setCompleted(event.target.checked)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default EditUser;
