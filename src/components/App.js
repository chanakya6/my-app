import React from "react";

/* import FormClass from "./classcomp/FormEvents/FormClass"; */
/* import FormFunc from "./functioncomp/FormEvents/FormFunc"; */
/* import FuncAppForm from './functioncomp/FuncAppForm'; */
import Navbar1 from "./functioncomp/Navbar/Navbar1";
import { Routes, Route } from "react-router-dom";
import Home from "./functioncomp/Pages/Home";
import Projects from "./functioncomp/Pages/Projects";
import Contact from "./functioncomp/Pages/Contact";
import Aboutus from "./functioncomp/Pages/Aboutus";
import Login from "./functioncomp/Pages/Login";
import AddTodo from "./functioncomp/Pages/AddTodo";
import EditTodo from "./functioncomp/Pages/EditTodo";
import PageNotFound from "./functioncomp/Pages/PageNotFound";

const App = () => {
  return (
    <div>
      {/* <FormClass/> */}
      {/* <FormFunc/> */}
      {/* <FuncAppForm/> */}
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/AddTodo" element={<AddTodo />} />
        <Route path="/EditTodo/:id" element={<EditTodo />} /> {/* using slug */}
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
