//step:1 import necessary packages or libraries
//step -2: create a function and return html
//step -3: export default fncname

import React from "react";
// import FuncHeader from "./FuncHeader";
// import "../ClassComp/ClassApp.css";
// import FuncProps from "./Props/FuncProps";
// import FuncState from "./States/FuncState";
import ListComp from "./Listings/ListComp";
// const myStyle = { color: "red" };

function FuncApp() {
  return (
    <div>
      {/* <h1 style={myStyle}>Functional App Component </h1> */}
      {/* <FuncProps name="Sulochana" age="40" /> */}
      {/* <FuncState /> */}
      <ListComp />
    </div>
  );
}
export default FuncApp;

//create five class components
//create five functional components
//all components in index js as output
//push ur code to ur respective branches
