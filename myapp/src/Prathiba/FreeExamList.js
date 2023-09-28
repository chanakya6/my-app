import React from 'react';

function FreeExamList () {  
    const submmithandeler = async(event)=>{
        event.preventDefault();
        try{
        const response = await fetch("https://test.e-prathibha.com/apis/test_free_exam",
        {method : 'POST'},
        {headers:{'Content-Type':'application/json',
        'server_key':"3w99V63pW7tJ7vavGXtCKo8cp"}});
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
  return (
    <div>
        <div className="card1">
           
        </div>
    </div> 
  )
}

export default FreeExamList;