const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      // state.numOfCakes += action.payload;
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
