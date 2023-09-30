import React from "react";
import { Route,Routes } from "react-router-dom";
//import { Navbar } from "react-bootstrap";
//import FunProps from "./Fun-props/FunProps";
//import StateCompo from "./State-Functinal-Components/StateCompo";
//import ListCompo from './Listing-Functinal/Listcompo';
import Navbar from "./NavBar/Navbar";
//import { Routes } from "react-router-dom";
import Home from "./NavPages/Home";
import About from "./NavPages/About";
//import Project from "./NavPages/Project";
//import Conatact from './NavPages/conatct';
import PagenotFound from "./NavPages/PagenotFound";
import Conatct from "./NavPages/conatct";
import EditUser from "./NavPages/EditUser";
import AddUser from "./NavPages/AddUser";
import Project from "./NavPages/Project";
function FunApp(){
    return<div>
        <Navbar/>
        <Routes>
            <Route path = "/" element = {<Home/> }/>
            <Route path = "/about" element={<About/>}/>
           {/* <Route path = "/project" element = {<Project/>}/>*/}
                <Route path= "/project" element={<Project/>}/>
            <Route path="/adduser" element={<AddUser/>}/>
            <Route path="/edituser/:id" element={<EditUser/>}/>
            <Route path ="/conatct" element = {< Conatct/>}/>
            <Route path="*" element= {<PagenotFound/>}/>
        </Routes>

    </div>

}
export default FunApp;