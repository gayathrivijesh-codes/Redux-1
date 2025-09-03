// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./countSlice";

function CountView() {
  const count = useSelector((state) => state.counter.count); // Get count from Redux store
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}>🔄 Reset</button>
    </div>
  );
}

export default CountView;
