import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
// import { BrowserRouter } from "react-router-dom";
// import FuncApp from "./components/FunctionalComp/FuncApp";
// import store from "./components/FunctionalComp/redux/store";
// import { Provider } from "react-redux";
export const messageContext = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
const data = { name: "Chanakya" };
root.render(
  // <FuncApp />
  // <Provider store={store}>
  // <BrowserRouter>
  <messageContext.Provider value={data}>
    <App />
  </messageContext.Provider>
  // {/* </BrowserRouter> */}
  // </Provider>
);
