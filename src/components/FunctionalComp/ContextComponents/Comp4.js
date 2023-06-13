import React from "react";
import { messageContext } from "../../..";

const Comp4 = () => {
  return (
    <messageContext.Consumer>
      {(data) => <h1>{data.name}</h1>}
    </messageContext.Consumer>
  );
};

export default Comp4;
