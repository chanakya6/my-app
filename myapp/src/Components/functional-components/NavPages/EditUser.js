import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap'; 
import { useState } from 'react';
import axios from 'axios';



const EditUser = () => {
    const location = useLocation();
    ////console.log(location)
    const navigate = useNavigate;
    
    const{id,userId,title,Completed} = location?.state;
    const [useId, setUseId] = useState(userId||'');
    const [titleText, setTitletext] = useState(title||'');
    const [isCompleted, setisCompleted] = useState( Completed|| false);

    const updateRecord = async (event)=>{
        event.preventDefault();
        let updateRecord ={
            userid:useId,
            title:titleText,
            Completed:isCompleted,
        }
        let response = await axios.put(`http://localhost:3001/todos/${id}`,updateRecord)
        console.log(response);
        if(response?.status === 200)
        navigate('/projects')
    }

  return(
    <div>
         <Form style={{maxWidth:"40%",marginLeft:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicUserId" >
        <Form.Label>UserID</Form.Label>
        <Form.Control type="number" placeholder="Enter user id" name="userId" value={useId}
         onChange={(event)=>setUseId(event.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="Todo" >
        <Form.Label>Add Todo</Form.Label>
        <Form.Control type="text" placeholder="enter your task"  name="title" value={titleText}
        onChange={(event)=>setTitletext(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="is completed"  name ="compelted"  value={isCompleted}
        onChange={(event)=>setisCompleted(event.target.checked)}/>
        </Form.Group>
        </Form>
    </div>
  )
}

export default EditUser;