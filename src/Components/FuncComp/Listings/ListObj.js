import React from "react";

const ListObj = () => {
  const objArray = { id: 101, name: "neelima", location: "hyd" };
  return (
    <div>
      <h1>list of objects</h1>
      <ul>
        {objArray.map((obj) => (
          <li key={obj.id}>
            {obj.name}-{obj.location}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListObj;
