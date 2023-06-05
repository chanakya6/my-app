import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import FunApp from './Components/functional-components/FunApp';
import FunAppProps from './Components/functional-components/Fun-props/FunPropApp';
import AcFun from './Components/functional-components/Fun-props/AccordianFun';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <FunAppProps />
    <AcFun/>
</div>);