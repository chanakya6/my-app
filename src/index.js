import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//  import ClassApp1 from './components/ClassComp/ClassApp1';
//  import ClassApp2 from './components/ClassComp/ClassApp2';
//  import ClassApp3 from './components/ClassComp/ClassApp3';
//  import ClassApp4 from './components/ClassComp/ClassApp4';
//  import ClassApp5 from './components/ClassComp/ClassApp5';
//  import FuncApp1 from './components/FunctionalComp/FuncApp1';
//  import FuncApp2 from './components/FunctionalComp/FuncApp2';
//  import FuncApp3 from './components/FunctionalComp/FuncApp3';
//  import FuncApp4 from './components/FunctionalComp/FuncApp4';
//  import FuncApp5 from './components/FunctionalComp/FuncApp5';
// import ClassApp1 from './components/ClassComp/ClassApp1';
// import ClassApp5 from './components/ClassComp/ClassApp5';
// import FuncApp1 from './components/FunctionalComp/FuncApp1';
// import FuncApp from './components/FunctionalComp/FuncApp';
// import FuncApp1 from './components/FunctionalComp/FuncApp1'
// import ClassApp1 from './components/ClassComp/ClassApp1';
// import FuncApp1 from './components/FunctionalComp/FuncApp1';
import App from './components/FunctionalComp/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
{/* <ClassApp1/>
<ClassApp2/>
<ClassApp3/>
<ClassApp4/>
<ClassApp5/>
<FuncApp1/>
<FuncApp2/>
<FuncApp3/>
<FuncApp4/>
<FuncApp5/> */}

{/* <ClassApp1/> */}
{/* <ClassApp5/>
<FuncApp1/> 
 <FuncApp/> */}
 {/* <FuncApp1/> */}
 {/* <ClassApp1/>
 <FuncApp1/> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
</div>
  
);

