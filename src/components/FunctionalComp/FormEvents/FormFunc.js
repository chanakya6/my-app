import React, { useState } from "react";
import "../../ClassComp/FormsEvents/FormClass.css";

const fruits = ["Apple", "Banana", "Watermelon", "Orange", "Grapes", "Mangoes"];
const FormFunc = () => {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");
  const [fruitsDropDown, setFruitsDropDown] = useState("Apple");
  const [notRobot, setNotRobot] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const onSubmitFunc = (event) => {
    event.preventDefault();
    !emailAdd ? setErrorMsg("Email Address is mandatory") : setErrorMsg("");
    !fruitsDropDown ? alert("empty values") : alert(fruitsDropDown);
  };
  return (
    <form className="formContainer" onSubmit={onSubmitFunc}>
      <div className="inputContainer">
        <label htmlFor="emailAdd">Email</label>
        <span style={{ color: "red" }}>*</span>
        <input
          type="email"
          name="emailAdd"
          id="emailAdd"
          onChange={(event) => setEmailAdd(event.target.value)}
        />
        <h1>{emailAdd}</h1>
        <h1 style={{ color: "red" }}>{errorMsg}</h1>
      </div>
      <br />
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <h1>{password}</h1>
      </div>
      <br />
      <div>
        <select
          value={fruitsDropDown}
          onChange={(event) => setFruitsDropDown(event.target.value)}
        >
          {fruits.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          name="notRobot"
          id="notRobot"
          checked={notRobot}
          onChange={(event) => setNotRobot(event.target.checked)}
        />{" "}
        I am not robot
      </div>
      <div>
        <input type="radio" />
        Male
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormFunc;
