import React from 'react'
import Table from 'react-bootstrap/Table';
import "./Listings.css";
const array=[1,2,3,4,5,6,7,,9]
const LIstNum = () => {
  return (
      <div className="numArray">
          <h1>Number array list</h1>
          <Table striped>
              <thead>
                  <th>
                      <td>S.No</td>
                      <td>User id</td>
                  </th>
              </thead>
              <tbody>
                  {array.map((value, index) => (
                      <tr key ={ value}>
                          <td>{index}</td>
                          <td>{value}</td>
                      </tr>
                  )
                  )}
              </tbody>
          </Table>
         

    </div>
  )
}

export default LIstNum

