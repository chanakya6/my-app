import React, { useState } from "react";
import "../../ClassComp/FormsEvents/FormClass.css";

const FormFunc = () => {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitFunc = (event) => {
    event.preventDefault();
    !emailAdd && !password ? alert("empty values") : alert(emailAdd);
  };
  return (
    <form className="formContainer" onSubmit={onSubmitFunc}>
      <div className="inputContainer">
        <label htmlFor="emailAdd">Email</label>
        <input
          type="email"
          name="emailAdd"
          id="emailAdd"
          onChange={(event) => setEmailAdd(event.target.value)}
        />
        <h1>{emailAdd}</h1>
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
      <button>Submit</button>
    </form>
  );
};

export default FormFunc;
