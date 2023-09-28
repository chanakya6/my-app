import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from "./LoginPage";
//import Reg from "./Reg";
import RegisterApp from "./RegistrationApp";
import VerificationPage from "./VerificationPage";
import FreeExamList from "./FreeExamList";
import PageNotFound from "./PageNotFound";
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/loginpage' element={< LoginPage/>} >LoginPage</Route>
            <Route path='/RegisterApp' element={<RegisterApp/>}>RegistrationPage</Route>
            <Route path='/verificationPage' element={<VerificationPage/>}>verificationPage</Route>
            <Route path='/freeeamlist'element={<FreeExamList/>}></Route>
            <Route path="*" element={<PageNotFound/>}>PageNotFound</Route>
            
        </Routes>
        </BrowserRouter>
    )
}
export default App;