import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import FoodApp from './FoodieApp/FoodApp';
//import TodoApp from './Todolist/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
                <FoodApp/>
        </BrowserRouter>);
    