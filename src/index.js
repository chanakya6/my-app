import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassApp from "./Components/ClassComp/ClassApp";
import ClassApp2 from "./Components/ClassComp2/ClassApp2";
import ClassApp3 from "./Components/ClassComp3/ClassApp";
import ClassApp4 from "./Components/ClassComp4/ClassApp4";
import ClassApp5 from "./Components/ClassComp5/ClassApp5";
import FuncApp from "./Components/FuncComp/FuncApp";
import FuncApp2 from "./Components/FuncApp2/FuncApp2";
import FuncApp3 from "./Components/FuncApp3/FuncApp3";
import FuncApp4 from "./Components/FuncApp4/FuncApp";
import FuncApp5 from "./Components/FuncApp5/FuncApp5";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <ClassApp />
    
    <ClassApp2 />
    <ClassApp3 />
    <ClassApp4 />
    <ClassApp5 />
    <div>
    <FuncApp />
    <FuncApp2 />
    <FuncApp3 />
    <FuncApp4 />
        <FuncApp5 />
        <FuncApp5 />
        </div>
</div>
   

    
);


