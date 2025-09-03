import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.now, text: action.payload, completed: false });
    },
    toggletodo: (state, action) => {
      const todo = state.filter((todo) => todo.id === action.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deletetodo: (state, action) => {
      state.delete((todo) => todo.id != action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addtodo, toggletodo, deletetodo } = todoSlice.actions;
