// import React from 'react'
// import "./Pages.css";
// import TodoList from "../TodoList";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-solid-svg-icons';

// const Projects = () => {
//   return (
//     <div className='todo_block'>
//       <TodoList />
//     </div>
//   )
// }

// export default Projects;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* import React, { useState, useEffect } from 'react';
import "./Pages.css";
import axios from "axios";
import { Table, Button } from "react-bootstrap";


const Projects = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let apiData = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTable(apiData.data);
  };

  const addingrow = async () => {
    let newRow = {
      "userId": 10,
      "id": 201,
      "title": "delectus aut autem",
      "completed": true
    };
    let apiData = await axios.post("https://jsonplaceholder.typicode.com/todos", newRow);
    console.log(apiData);
    setTable([...table, apiData.data]);
  };

  // const onDelete = async (id) => {
  //   let apiData = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  //   console.log(apiData);
  //   setTable(apiData);
  // };
  const onDelete = (tableRow) => {
    let apiData = table.filter((row) => row.id !== tableRow);
    console.log(apiData);
    setTable(apiData);
  };

  // const onPut = async (id) => {
  //   let changeRow = {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "brother put chesa ok na",
  //     "completed": false
  //   }
  //   let apiData = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, changeRow);
  //   console.log(apiData);
  //   setTable(changeRow);
  // }

  const onPut = async (id) => {
    let putRow = {
      "userId": 1,
      "id": id,
      "title": "aravind",
      "completed": true
    };

    let apiData = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, putRow);
    console.log(apiData);

    let putTable = table.map((row) => {
      if (row.id === id) {
        return apiData.data;
      }
      return row;
    });

    setTable(putTable);
  };



  const onPatch = async (id) => {
    let patchRow = {
      "title": "Model Model super Model",
      "completed": true
    };

    let apiData = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, patchRow);
    console.log(apiData);

    let patchTable = table.map((row) => {
      if (row.id === id) {
        return apiData.data;
      }
      return row;
    });

    setTable(patchTable);
  };






  return (
    <div className='ProjectTable'>
      <Button onClick={() => { addingrow() }}>Click to add row</Button>
      <Table striped variant="dark" size="sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>S.No</th>
            <th>UserId</th>
            <th>Title</th>
            <th>IsCompleted</th>
            <th colSpan={3}>Operation</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {
            table.length > 0
              ? (table.map((eachRow) => {
                return <tr key={eachRow.id}>
                  <td>{eachRow.id}</td>
                  <td>{eachRow.userId}</td>
                  <td>{eachRow.title}</td>
                  <td>{eachRow.completed ? "yes" : "no"}</td>
                  <td><Button variant='success' onClick={() => { onPut(eachRow.id) }}>Put</Button></td>
                  <td><Button variant='primary' onClick={() => { onPatch(eachRow.id) }}>Patch</Button></td>
                  <td><Button variant='danger' onClick={() => { onDelete(eachRow.id) }}>Delete</Button></td>
                </tr>
              }))
              : <tr><td colSpan={5}>No Data Avialable</td></tr>
          }
        </tbody>
      </Table>
    </div>
  )
};

export default Projects; */

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import "./Pages.css";
// import axios from "axios";
// import { Table, Button } from "react-bootstrap";
// // import { useNavigate } from 'react-router-dom';

// const Projects = () => {
//   const [table, setTable] = useState([]);

//   // const navigate = useNavigate();

//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = async () => {
//     let apiData = await axios.get("https://localhost:3001/todos");
//     setTable(apiData.data);
//   };

//   // const addingrow = async () => {
//   // let newRow = {
//   //   userId: 10,
//   //   id: 201,
//   //   title: "delectus aut autem",
//   //   completed: true,
//   // };
//   //   let apiData = await axios.post(
//   //     "https://jsonplaceholder.typicode.com/todos",
//   //     newRow
//   //   );
//   //   console.log(apiData);
//   //   setTable([...table, apiData.data]);
//   // };

//   // const onDelete = async (id) => {
//   //   let apiData = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
//   //   console.log(apiData);
//   //   setTable(apiData);
//   // };

//   const onDelete = (tableRow) => {
//     let apiData = table.filter((row) => row.id !== tableRow);
//     console.log(apiData);
//     setTable(apiData);
//   };

//   // const onPut = async (id) => {
//   //   let changeRow = {
//   //     "userId": 1,
//   //     "id": 1,
//   //     "title": "brother put chesa ok na",
//   //     "completed": false
//   //   }
//   //   let apiData = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, changeRow);
//   //   console.log(apiData);
//   //   setTable(changeRow);
//   // }

//   const onPut = async (id) => {
//     let putRow = {
//       userId: 1,
//       id: id,
//       title: "aravind",
//       completed: true,
//     };

//     let apiData = await axios.put(
//       `https://jsonplaceholder.typicode.com/todos/${id}`,
//       putRow
//     );
//     console.log(apiData);

//     let putTable = table.map((row) => {
//       if (row.id === id) {
//         return apiData.data;
//       }
//       return row;
//     });

//     setTable(putTable);
//   };

//   const onPatch = async (id) => {
//     let patchRow = {
//       title: "Model Model super Model",
//       completed: true,
//     };

//     let apiData = await axios.patch(
//       `https://jsonplaceholder.typicode.com/todos/${id}`,
//       patchRow
//     );
//     console.log(apiData);

//     let patchTable = table.map((row) => {
//       if (row.id === id) {
//         return apiData.data;
//       }
//       return row;
//     });

//     setTable(patchTable);
//   };

//   return (
//     <div className="ProjectTable">
//       <Button
//         onClick={() => {
//           addingrow();
//         }}
//       >
//         Click to add row
//       </Button>
//       {/* <Button onClick={() => {
//         navigate("/AddTodo")
//         // window.location.href = "/AddTodo";
//       }}>
//         Click to add row
//       </Button> */}
//       <Table striped variant="dark" size="sm">
//         <thead style={{ textAlign: "center" }}>
//           <tr>
//             <th>S.No</th>
//             <th>UserId</th>
//             <th>Title</th>
//             <th>IsCompleted</th>
//             <th colSpan={3}>Operation</th>
//           </tr>
//         </thead>
//         <tbody style={{ textAlign: "center" }}>
//           {table.length > 0 ? (
//             table.map((eachRow) => {
//               return (
//                 <tr key={eachRow.id}>
//                   <td>{eachRow.id}</td>
//                   <td>{eachRow.userId}</td>
//                   <td>{eachRow.title}</td>
//                   <td>{eachRow.completed ? "yes" : "no"}</td>
//                   <td>
//                     <Button
//                       variant="success"
//                       onClick={() => {
//                         onPut(eachRow.id);
//                       }}
//                     >
//                       Put
//                     </Button>
//                   </td>
//                   <td>
//                     <Button
//                       variant="primary"
//                       onClick={() => {
//                         onPatch(eachRow.id);
//                       }}
//                     >
//                       Patch
//                     </Button>
//                   </td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       onClick={() => {
//                         onDelete(eachRow.id);
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan={5}>No Data Avialable</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Projects;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import "./Pages.css";
// import axios from "axios";
// import { Table, Button } from "react-bootstrap";

// const Projects = () => {
//   const [table, setTable] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     let jsonData = await axios.get(" http://localhost:3001/todos");
//     setTable(jsonData.data);
//   };

//   const addingrow = async () => {
//     let newRow = {
//       "userId": 1,
//       "id": 2,
//       "title": "Hey I'm a Developer",
//       "completed": true
//     };
//     let jsonData = await axios.post(" http://localhost:3001/todos", newRow);
//     console.log(jsonData);
//     // setTable([...table, apiData.data]);
//     getData();
//   };

//   const deleteRow = async (row) => {
//     let jsonData = await axios.delete(`http://localhost:3001/todos${row}`);
//     console.log(jsonData);
//     getData();
//   }

//   const putRow = async (row) => {
//     let newRow = {
//       "userId": 1,
//       "id": 2,
//       "title": "Hey I'm a Developer(Annaldas Aravind)",
//       "completed": true
//     };
//     let jsonData = await axios.put(`http://localhost:3001/todos${row}`, newRow);
//     console.log(jsonData);
//     getData();
//   }

//   const patchRow = async (row) => {
//     let newRow = {
//       "title": "Model Model Super Model",
//     };
//     let jsonData = await axios.patch(`http://localhost:3001/todos${row}`, newRow);
//     console.log(jsonData);
//     getData();
//   }

//   return (
//     <div className='ProjectTable'>
//       <Button onClick={() => { addingrow() }}>Click to add row</Button>
//       <Table striped variant="dark" size="sm">
//         <thead style={{ textAlign: "center" }}>
//           <tr>
//             <th>S.No</th>
//             <th>UserId</th>
//             <th>Title</th>
//             <th>IsCompleted</th>
//             <th colSpan={3}>Operation</th>
//           </tr>
//         </thead>
//         <tbody style={{ textAlign: "center" }}>
//           {
//             table.length > 0
//               ? (table.map((eachRow) => {
//                 return <tr key={eachRow.id}>
//                   <td>{eachRow.id}</td>
//                   <td>{eachRow.userId}</td>
//                   <td>{eachRow.title}</td>
//                   <td>{eachRow.completed ? "yes" : "no"}</td>
//                   <td><Button variant='success' onClick={() => { putRow(eachRow.id) }}>Put</Button></td>
//                   <td><Button variant='primary' onClick={() => { patchRow(eachRow.id) }}>Patch</Button></td>
//                   <td><Button variant='danger' onClick={() => { deleteRow(eachRow.id) }}>Delete</Button></td>
//                 </tr>
//               }))
//               : <tr><td colSpan={5}>No Data Avialable</td></tr>
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// };

// export default Projects;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import "./Pages.css";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [table, setTable] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let jsonData = await axios.get(" http://localhost:3001/todos");
    setTable(jsonData.data);
  };

  /* const addingrow = async () => {
    let newRow = {
      "userId": 1,
      "id": 2,
      "title": "Hey I'm a Developer",
      "completed": true
    };
    let jsonData = await axios.post(" http://localhost:3001/todos", newRow);
    console.log(jsonData);
    // setTable([...table, apiData.data]);
    getData();
  }; */

  const deleteRow = async (row) => {
    let jsonData = await axios.delete(`http://localhost:3001/todos/${row}`);
    console.log(jsonData);
    getData();
  };

  /* const putRow = async (row) => {
    let newRow = {
      "userId": 1,
      "id": 2,
      "title": "Hey I'm a Developer(Annaldas Aravind)",
      "completed": true
    };
    let jsonData = await axios.put(`http://localhost:3001/todos${row}`, newRow);
    console.log(jsonData);
    getData();
} */

  /* const patchRow = async (row) => {
    let newRow = {
      "title": "Model Model Super Model",
    };
    let jsonData = await axios.patch(`http://localhost:3001/todos${row}`, newRow);
    console.log(jsonData);
    getData();
  } */

  return (
    <div className="ProjectTable">
      <Button
        onClick={() => {
          navigate("/AddTodo");
        }}
      >
        Click to add row
      </Button>
      <Table striped variant="dark" size="sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>S.No</th>
            <th>UserId</th>
            <th>Title</th>
            <th>IsCompleted</th>
            <th colSpan={3}>Operation</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {table.length > 0 ? (
            table.map((eachRow) => {
              return (
                <tr key={eachRow.id}>
                  <td>{eachRow.id}</td>
                  <td>{eachRow.userId}</td>
                  <td>{eachRow.title}</td>
                  <td>{eachRow.completed ? "yes" : "no"}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() =>
                        navigate(`/EditTodo/${eachRow.id}`, {
                          state: {
                            id: eachRow.id,
                            userId: eachRow.userId,
                            title: eachRow.title,
                            isCompleted: eachRow.completed,
                          },
                        })
                      }
                    >
                      Put
                    </Button>
                  </td>
                  {/* <td><Button variant='success' onClick={() => { putRow(eachRow.id) }}>Put</Button></td> */}
                  {/* <td><Button variant='primary' onClick={() => { patchRow(eachRow.id) }}>Patch</Button></td> */}
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteRow(eachRow.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>No Data Avialable</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default Projects;
