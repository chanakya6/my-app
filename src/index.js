import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import ClassApp from './components/ClassComp/ClassApp';
import FuncApp from './components/FunctionalComp/FuncApp';
import Button from 'react-bootstrap/Button';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClassApp />
    <h1>1.Chandu</h1>
    <h1>2.mani</h1>
    <h1>3.Arvind</h1>
    <h1>4.Venkat</h1>
    <h1>5.Chanakya</h1>
    <FuncApp />
    <h1>1.Chandu</h1>
    <h1>2.mani</h1>
    <h1>3.Arvind</h1>
    <h1>4.Venkat</h1>
    <h1>5.Chanakya</h1>
    <button type="button" class="btn btn-primary">
      primary
    </button>
    <Button variant="warning" >Chandu Vallu</Button> 
   </div>
  );
 

