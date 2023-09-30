import React from 'react';
import './comments.css';
import { useState } from 'react';

function Comments() {
  const[comment,setComment] = useState("");
  const[comments,setComments] = useState([]);
  const addComment =() =>{
    if(comment!==''){
      setComments([...comments,comment]);
      setComment("");
    }
  }
  const delcomment=(text)=>{
    const newcomment = ()=>comments.filter((comment)=>{
      return comment !== text;
    })
    setComments(newcomment);
  }
  return (
    <div>
      <div>
        <input type='text' id='text' name='comment' value={comment}
        onChange={(event)=>setComment(event.target.value)}/>
        <button type="button" className='btn' onClick={addComment}>Add</button>
      </div>
      <ul>
        {comments.map((comment,index)=>{
          return(
            <div>
              <button className='btn'onClick={()=>delcomment(comment)}>Delete</button>
              <li key={index} style={{
                 border :"2px solid black",
                 width: "400px",
                 height:"50px",
                 liststyletype: "none",
                 fontsize : "large",
                 color: "blue",
                 textalign: "center",
                 justifyContent:"center"
                 
              }}>{comment}</li>
              
            </div>
          )

        })}
      </ul>
    </div>
  )
}

export default Comments;