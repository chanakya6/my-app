import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import ClassOne from "./Components/ClassCmpnt/ClassOne";
import ClassTwo from './Components/ClassCmpnt/ClassTwo';
import ClassPara from './Components/ClassCmpnt/ClassPara';
import ClassHeader from './Components/ClassCmpnt/ClassHeader';
import ClassLast from './Components/ClassCmpnt/ClassLast';
import FuncOne from './Components/FunctionalComponents/FuncOne';
import FuncComp from './Components/FunctionalComponents/FuncComp';
import FuncThree from './Components/FunctionalComponents/FuncThree';
import FuncAdv from './Components/ClassCmpnt/FuncAdv';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClassOne/>
    <ClassTwo/>
    <ClassPara/>
    <ClassHeader/>
    <ClassLast/>

    <FuncOne/>
    <FuncComp/>
    <FuncThree/>
    <FuncAdv/>
  </div>
);