import React from 'react';
import FuncHeader from './FuncHeader';
import "../ClassComp/ClassApp.css";
// import "./FuncHeader.css";

function FuncApp() {
    return (<div>
        <h1 style={{ color: "blue", fontFamily: "serif", textAlign: "center", border: "5px solid ash",}}>functional app component</h1>
        <FuncHeader />
        </div>)
    
}
export default FuncApp;