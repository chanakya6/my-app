import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassApp from './Components/Class-components/ClassApp';
import ClassApp1 from './Components/Class-components/ClassApp1'
import ClassApp2 from './Components/Class-components/ClassApp2';
import ClassApp3 from './Components/Class-components/ClassApp3'
import ClassApp4 from './Components/Class-components/ClassApp4';
import ClassApp5 from './Components/Class-components/ClassApp5';
import FunApp from './Components/functional-components/FunApp';
import FunApp5 from './Components/functional-components/FunApp5';
import FunApp4 from './Components/functional-components/FunApp4';
import FunApp3 from './Components/functional-components/FunApp3';
import FunApp2 from './Components/functional-components/FunApp2';
import FunApp1 from './Components/functional-components/FunApp1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
                <ClassApp />
                <ClassApp1 />
                <ClassApp2 />
                <ClassApp3 />
                <ClassApp4 />
                <ClassApp5 />
                <FunApp />
                <FunApp5 />
                <FunApp4 />
                <FunApp3 />
                <FunApp2 />
                <FunApp1 />
          </div>);