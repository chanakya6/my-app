import React from 'react';
import { useState } from 'react';

function TodoApp() {
    const[todo,setTodo] = useState("");
    const[todos,setTodos] = useState([]);
    //const[toapp,setToapp] = useState("addtodo")
    const addTodo=()=>{
            if(todo !== ''){
                setTodos([...todos,todo]);
                setTodo("");
            }
         }
         const deletodo =(text) =>{
            const newTodos =()=> todos.filter((todo)=>{
                return todo!== text;
            });
            setTodos(newTodos);

         }
return (
    <div>
        <h1>TodoApp</h1>
        <div>
            <input type='text' name='todolist' placeholder='enter your text' value={todo}
            onChange={(event) =>setTodo(event.target.value)}/>
            <button type='button' className='button' onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo,index)=>{
                    return(
                        <div className='todo'>
                            <li key={index}>{todo}</li>
                            <button className='del'
                            onClick={()=>deletodo(todo)}>Delete</button>

                        </div>
                    )

                } )}
            </ul>
        </div>
    </div>
  )}

export default TodoApp;