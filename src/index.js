import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import FirstClass from './Components/ClassComponents/First-Class';
// import SecondClass from './Components/ClassComponents/SecondClass';
// import ThreeClass from './Components/ClassComponents/ThreeClass';
// import ForthClass from './Components/ClassComponents/ForthClass';
// import FiveClass from './Components/ClassComponents/FiveClass';
// import Firstfun from './Components/FunctionComponents/Firstfun';
// import Secondfun from './Components/FunctionComponents/Secondfun';
// import Threefun from './Components/FunctionComponents/Threefun';
// import Forthfun from './Components/FunctionComponents/Firstfun';
// import Fivefun from './Components/FunctionComponents/Fivefun';
// import ClassAccd from './Components/ClassComponents/Accordion/ClassAccd'
// import ListApp from './Components/FunctionComponents/ListApp';
import App from './Components/App';
import store from './Components/FunctionComponents/Redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
 <div>
    {/* <FirstClass /> */}
     {/* <SecondClass />  */}
    {/* <ThreeClass />
    <ForthClass />
    <FiveClass />*/} 
    {/* <Firstfun />  */}
    {/* <Secondfun />
    <Threefun />
    <Forthfun />
    <Fivefun /> */}
    {/* <ClassAccd /> */}
    {/* <ListApp /> */}
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
</div>
);



