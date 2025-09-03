//import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <h2>number of IceCream - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <button onClick={() => dispatch(restocked(value))}>restock cakes</button>
      <label htmlFor="val">Give the input to restock:</label>
      <input
        id="val"
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};
