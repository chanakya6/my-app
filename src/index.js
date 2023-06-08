import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstClass from './Components/ClassComponents/First-Class';
// import SecondClass from './Components/ClassComponents/SecondClass';
// import ThreeClass from './Components/ClassComponents/ThreeClass';
// import ForthClass from './Components/ClassComponents/ForthClass';
// import FiveClass from './Components/ClassComponents/FiveClass';
import Firstfun from './Components/FunctionComponents/Firstfun';
// import Secondfun from './Components/FunctionComponents/Secondfun';
// import Threefun from './Components/FunctionComponents/Threefun';
// import Forthfun from './Components/FunctionComponents/Firstfun';
// import Fivefun from './Components/FunctionComponents/Fivefun';
import ClassAccd from './Components/ClassComponents/Accordion/ClassAccd'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
 <div>
    <FirstClass />
    {/* <SecondClass />
    <ThreeClass />
    <ForthClass />
    <FiveClass /> */}
    <Firstfun />
    {/* <Secondfun />
    <Threefun />
    <Forthfun />
    <Fivefun /> */}
    <ClassAccd />
</div>
);