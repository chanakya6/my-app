import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// import FuncApp from "./components/FunctionalComp/FuncApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <FuncApp />
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
