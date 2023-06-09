import React from 'react'
import  Table from 'react-bootstrap/Table';
import "./Listings.css";
const array=["States","Conditionals","setState","useState","this.state","props"]
const ListComp = () => {
    return (
        <div class="containerTable"><h1>LIstings</h1>
          <Table striped variant="dark">
                <thead>
                    <th>
                        <td>S.NO</td>
                        <td>Name</td>
                    </th>
                    
                </thead>
                <tbody>
                    {
                        array.map((value, index) => (
                    <tr key={value}>
                                <td>{index+1 }</td>
                                <td>{value }</td>
                    </tr>
                       ) )
                    }
                </tbody>
            </Table>
      </div>
      
  )
}

export default ListComp