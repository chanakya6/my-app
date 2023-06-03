import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ClassApp from "./components/ClassComp/ClassApp";
import FuncApp from "./components/FunctionalComp/FuncApp";
// import Button from "react-bootstrap/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <ClassApp /> */}
    <FuncApp />
    {/* <button type="button" className="btn btn-primary">
      Primary
    </button> */}
    {/* <Button variant="warning">React Bootstrap Button</Button> */}
  </div>
);
