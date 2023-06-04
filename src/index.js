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

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClassOne/>
    <ClassTwo/>
    <ClassPara/>
    <ClassHeader/>
    <ClassLast/>
  </div>
);