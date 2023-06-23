import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import FormsClass from './ClassComponents/FormsEvents/FormsClass';
// import FormFunc from './FunctionComponents/FormEvents/FormFunc';
import Navbar from './FunctionComponents/Navbar/Navbar';
// import { Route, Routes } from 'react-router-dom';
import Home from './FunctionComponents/Pages/Home';
import About from './FunctionComponents/Pages/About';
import Project from './FunctionComponents/Pages/Project';
import Contact from './FunctionComponents/Pages/Contact';
// import AddToDo from './FunctionComponents/Pages/AddToDo';
// import EditUser from './FunctionComponents/Pages/EditUser';
import CounterComp from './FunctionComponents/reduxComp/CounterComp';
const App = () => {
  return (
    <div>
     {/* <div>< FormsClass /></div> */}
    <Navbar />
     <Routes>      {/* manages each each router */}
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Project" element={<Project/>} />
     <Route path="/reduxApp" element={<CounterComp/>} />
     {/* <Route path="/AddToDo" element={<AddToDo/>} /> */}
     {/* <Route path="/EditUser/:id" element={<EditUser/>} /> */}
     <Route path="/Contact" element={<Contact />}/>
    </Routes>
    {/* <FormFunc /> */}
    </div>
  )
}

export default App;