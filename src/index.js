import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassApp from "./Components/ClassComponenets/ClassApp";
import ClassApp2 from "./Components/ClassComponenets/ClassApp2";
import ClassApp1 from "./Components/ClassComponenets/ClassApp1";
import ClassApp3 from "./Components/ClassComponenets/ClassApp3";
import ClassApp4 from "./Components/ClassComponenets/ClassApp4";
import FuncApp from "./Components/FunctionalComponenets/FuncApp";
import FuncApp4 from "./Components/FunctionalComponenets/FuncApp4";
import FuncApp1 from "./Components/FunctionalComponenets/FuncApp1";
import FuncApp2 from "./Components/FunctionalComponenets/FuncApp2";
import FuncApp3 from "./Components/FunctionalComponenets/FuncApp3";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClassApp />
    <ClassApp1 />
    <ClassApp2 />
    <ClassApp3 />
    <ClassApp4 />
    <FuncApp />
    <FuncApp4 />
    <FuncApp1 />
    <FuncApp2 />
    <FuncApp3 />
  </div>
);


