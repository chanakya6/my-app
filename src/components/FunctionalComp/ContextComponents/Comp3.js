import React, { useContext } from "react";
import Comp4 from "./Comp4";
import { messageContext } from "../../..";

const Comp3 = () => {
  const data = useContext(messageContext);
  return (
    <div>
      <h1>Comp3 {data.name}</h1>
      <Comp4 />
    </div>
  );
};

export default Comp3;
