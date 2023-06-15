import React from 'react';
import ReduxNavbar from './ReduxNavbar';
import { Route,Routes } from 'react-router-dom';
import ReduxHome from "../NavPages/ReduxHome";
import ReduxProject from "../NavPages/ReduxProject";
import ReduxAbout from "../NavPages/RedxAbout";
import ReduxContactus from "../NavPages/ReduxContactus";
//import ReduxApplication from '../Redux/ReduxComponnets/ReduxApplication';
//import CounterCom from '../Redux/ReduxComponnets/CounterCom';
import ReduxAssingment from "../Redux/ReduxComponnets/AssingmentCom"


function ReduxApp() {
  return (
    <div><ReduxNavbar/>
    <Routes>
      <Route path="/ReduxHome" element={<ReduxHome/>}/>
      <Route path="/ReduxContactus" element={<ReduxContactus/>}/>
      <Route path="/ReduxProject" element={<ReduxProject/>}/>
     {/*<Route path="/ReduxApp" element={<CounterCom/>}/>*/}
     <Route path = "/reduxassingment" element = {< ReduxAssingment/>}/>
      <Route path="/ReduxAbout" element = {< ReduxAbout/>}/>
    </Routes>
    </div>
  )
}

export default ReduxApp;