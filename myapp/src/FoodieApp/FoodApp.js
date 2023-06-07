import React from 'react';
import Navbar from './NavBar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './NavBar/Navpages/Home';
import Recipe from './NavBar/Navpages/Rescipe';

//import Contactus from './NavBar/Navpages/Contactus';
import Refrence from './NavBar/Navpages/Refrence';
import PagenotFound from './NavBar/Navpages/Pagenotfound';
import Comments from './NavBar/Navpages/Comments';
function FoodApp() {
  return (
     <div>
        <Navbar/>
        <Routes>
        <Route path = "/Home" element ={<Home/>}/>
        <Route path = "/Recipe" element = {<Recipe/>}/>
        <Route path = "/Comments" element = {< Comments/>}/>
        <Route path="/Refrence" element={<Refrence/>}/>
        <Route path="*" element = {<PagenotFound/>}/>
      </Routes>
     </div>
  )
}

export default FoodApp;