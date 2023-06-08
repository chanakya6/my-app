import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";
// import Button from 'react-bootstrap/Button'; 
import { BrowserRouter } from 'react-router-dom';

// import ClassApp from './components/classComp/ClassApp/ClassApp';
// import FuncApp from './components/FunctionalComp/FuncApp';
// import FuncHeader from './components/FunctionalComp/FuncHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
  <App/> 
  </BrowserRouter>
  
);
  // <div>
  // <ClassApp/> 
  // <FuncApp/>
  // <FuncHeader/>
  // <button type="button" class="btn btn-primary">Primary </button>
  // <Button variant="warning">react bootstrap button </Button>
  // </div>
  // );
 