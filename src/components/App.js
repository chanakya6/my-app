import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./FunctionalComp/Navbar/Navbar";
// import About from "./FunctionalComp/Pages/About";
// import Home from "./FunctionalComp/Pages/Home";
// import Contact from "./FunctionalComp/Pages/Contact";
// import Projects from "./FunctionalComp/Pages/Projects";
// import PageNotFound from "./FunctionalComp/Pages/PageNotFound";
// import AddTodo from "./FunctionalComp/Pages/AddTodo";
// import EditUser from "./FunctionalComp/Pages/EditUser";
// import CounterComp from "./FunctionalComp/ReduxComp/CounterComp";
import Comp1 from "./FunctionalComp/ContextComponents/Comp1";

const App = () => {
  return (
    <div>
      <Comp1 name="Chanakya" />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reduxApp" element={<CounterComp />} />
        <Route path="/addTodo" element={<AddTodo />} />
        <Route path="/editTodo/:id" element={<EditUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </div>
  );
};

export default App;
