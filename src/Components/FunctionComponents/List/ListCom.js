import React from 'react';
import Table  from 'react-bootstrap/Table';
import "./ListComp.css";
const array=["hussain","basha","shaik"];
// const array=[1,2,3,4,5];
const ListCom=() =>{
    return(
        <div className='ContainerTable'>
            <h1>85R Batch</h1>
            <Table striped variant='dark' size='sm'>
                <thead>
                    <th>
                        <td>S.NO</td>
                        <td>Name</td>
                    </th>
                </thead>
                <tbody>
                    {
                        array.map((value,index) => (
                            <tr key={value}>
                                <td>{index + 1}</td>
                                <td>{value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};
export default ListCom;