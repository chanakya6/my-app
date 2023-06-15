import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
//import FoodApp from './FoodieApp/FoodApp';
//import TodoApp from './Todolist/TodoApp';
//import TodoApi from './Api/TodoApi';
//import Todo from './Api/Todo';
//import FunApp from './Components/functional-components/FunApp';
//import FormEvents from './Api/FormEvents';
import store from './Components/functional-components/Redux/Store';
import { Provider } from 'react-redux';
import ReduxApp from './Components/functional-components/NavBar/ReduxApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
   <BrowserRouter>  
                <ReduxApp/>
             </BrowserRouter>
</Provider>);
    