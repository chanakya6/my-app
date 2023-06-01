import React from 'react';
import ReactDOM from 'react-dom/client';


import ClassApp from './components/classComp/ClassApp';
import FuncApp from './components/FunctionalComp/FuncApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <ClassApp/> 
  <FuncApp/>
  </div>
  ); 
