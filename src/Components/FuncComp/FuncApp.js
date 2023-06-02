import React from 'react';
// import FuncHeader from './FuncHeader';
import FuncProps from './Props/FuncProps';
// import "../ClassComp/ClassApp.css";
// import "./FuncHeader.css";
// const myStyle={color:"green",fontFamily:"cursive",}
function FuncApp() {
    return (<div>
        {/* <h1 style={{ color: "blue", fontFamily: "serif", textAlign: "center", border: "5px solid ash", }}>functional app component</h1>
        <h1 style={myStyle}>Hi Iam styled by Internal CSS</h1> */}
        {/* <FuncHeader /> */}
        {/* <FuncProps name="Bablu" age={25} male="true" /> */}
        <FuncProps 
            String="Bablu"
            Number={30}
            Boolean="true"
        />


        </div>)
    
}
export default FuncApp;