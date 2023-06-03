import React from "react";
import Table from "react-bootstrap/Table";
import "./ListComp.css";

const array = [
  "Aravind",
  "Chandu",
  "Seshu",
  "Sesha",
  "Chanakya",
  "Sowjanya",
  "Neelima",
  "Manikanta",
];

const ListComp = () => {
  return (
    <div className="containerTable">
      <h1>85R Batch</h1>
      <Table striped variant="dark" size="sm">
        <thead>
          <th>
            <td>SNO</td>
            <td>Name</td>
          </th>
        </thead>
        <tbody>
          {array.map((value, index) => (
            <tr key={value}>
              <td>{index + 1}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListComp;
