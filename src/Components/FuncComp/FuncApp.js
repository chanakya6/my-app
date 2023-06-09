import React from 'react';
import ListComp from './Listings/ListComp';
import LIstNum from './Listings/LIstNum';

import FuncHeader from './FuncHeader';
import FuncProps from './Props/FuncProps';
import FuncState from './State/FuncState';
import FuncStates from './States/FuncStates';
import SuccessComp from './Conditionals/SuccessComp';
import FailedComp from './Conditionals/FailedComp';
import "../ClassComp/ClassApp.css";
import "./FuncHeader.css";
const myStyle={color:"green",fontFamily:"cursive",}
function FuncApp() {
    return (  <div>
        <h1 style={{ color: "blue", fontFamily: "serif", textAlign: "center", border: "5px solid ash", }}>functional app component</h1>
        <h1 style={myStyle}>Hi Iam styled by Internal CSS</h1> 
        <FuncHeader />
        <FuncProps name="Bablu" age={25} male="true" isSuccess={true} />
        <FuncProps 
            String="Bablu"
            Number={30}
            Boolean="true"
        />

        <FuncStates />
        <ListComp />
        <LIstNum />
    
     </div>  
    );
    
};
export default FuncApp;