import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';



import ClassApp from './components/classComp/ClassApp';
import FuncApp from './components/FunctionalComp/FuncApp';
import FuncHeader from './components/FunctionalComp/FuncHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <ClassApp/> 
  <FuncApp/>
  <FuncHeader/>
  </div>
  ); 
