import React from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './FuncAccordion/Accordion';
import index from './index';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Accordion />
    <index />
    </div>
);


