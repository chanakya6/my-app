import React from 'react';
import FuncHeader from './FuncHeader';
import "../ClassComp/ClassApp.css";
// import "./FuncHeader.css";
const myStyle={color:"green",fontFamily:"cursive",fontsize:"30px"}
function FuncApp() {
    return (<div>
        <h1 style={{ color: "blue", fontFamily: "serif", textAlign: "center", border: "5px solid ash", }}>functional app component</h1>
        <h1 style={myStyle}>Hi Iam styled by Internal CSS</h1>
        <FuncHeader />
        </div>)
    
}
export default FuncApp;