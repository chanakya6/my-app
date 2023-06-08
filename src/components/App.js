import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Phone from "./Navbar/Pages/Phone";
// import { Route } from "react-router-dom";
import Store from "./Navbar/Pages/Store";
import TVSmartHome from "./Navbar/Pages/TVSmartHome";
import LaptopTablet from "./Navbar/Pages/LaptopTablet";
import PageNotFound from "./Navbar/Pages/PageNotFound";


const App= () => {
    return (
        <div>
        <Navbar/>
        <Routes>
            <Route path='/Store' element={<Store/>} />
            <Route path='/Phone' element={<Phone/>} />
            <Route path='/TvSmartHome' element={<TVSmartHome/>} />
            <Route path='/LaptopTablet' element={<LaptopTablet/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </div>
    )
};
 export default App;