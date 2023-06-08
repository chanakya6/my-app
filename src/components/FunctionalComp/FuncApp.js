import React from 'react';
// import '../classComp/ClassApp/ClassApp.css';
// import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const myStyle= {color:"red"}
function FuncApp(){
    return (
    <div>
    <h2 style={myStyle}>Functional App Component</h2>
    </div>
    )
}
export default FuncApp;
