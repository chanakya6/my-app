import React, { useState } from "react";

const FuncState = () => {
  const [name, setName] = useState("Neelima");
  const [age, setAge] = useState(30);
  return (
    <h1
      onClick={() => {
        setName("Sowjanya");
        setAge(45);
      }}
    >
      {name} Functional State Component and age is {age}
    </h1>
  );
};

export default FuncState;
