import React from "react";

// import FormClass from "../ClassComp/FormEvents/FormClass";
// import FormFunc from './FormEvents/FormFunc';
import Navbar from '../FunctionalComp/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "../FunctionalComp/Pages/Home";
import About from "..//FunctionalComp/Pages/About";
import Contact from "..//FunctionalComp/Pages/Contact";
import Projects from "..//FunctionalComp/Pages/Projects";



const App=()=>{

    // return <FormClass/>;
    // return <FormFunc/>
    return(
    <div>
            <Navbar />
            <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/Projects' element={<Projects/>}/>

            </Routes>
        
        </div>
    )
    
    
    
};
export default App;