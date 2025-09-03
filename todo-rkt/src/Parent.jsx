//import React from 'react'

import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("");

  const setcall = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      {data}
      <Child setcall={setcall} />
    </div>
  );
};

export default Parent;
