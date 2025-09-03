import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1; // Directly mutate state (handled by Immer)
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = countSlice.actions; // Export actions
export default countSlice.reducer; // Export reducer
