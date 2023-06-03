import React from 'react';
import Table from 'react-bootstrap/Table';
import "./FuncList.css";


function FuncList() {
  let array=["Aravind","Varun","Sai","Ganesh","Rakesh","Mahesh","Santhosh"];
  return (
    <div>
       <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Names</th>
              </tr>
            </thead>
            <tbody>
              {array.map((value,index)=>{
                  return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{value}</td>
                  </tr>
                  )
              })}
            </tbody>
        </Table> 
    </div>
  )
}

export default FuncList;