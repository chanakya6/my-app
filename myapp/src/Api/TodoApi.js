import React ,{useState,useEffect}from 'react';
import {Table,Button, ToastHeader} from 'react-bootstrap';
import axios from'axios';

const  TodoApi=()=> {
    const[result,setResult]= useState([]);
//const [increment,setIncrement] = useState(0);
 //   const[decrement,setDecrement] =useState(0);
    useEffect  (()=>{
            getTodoData();
    }, []);
    const getTodoData =async ()=>{
       let response =  await axios.get("https://jsonplaceholder.typicode.com/todos");
       //console.log(response.data)
       setResult(response.data);
    }
    
  return (
    <div>
        
    
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>User Id</th>
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
        
    </div>
  );}

export default TodoApi;