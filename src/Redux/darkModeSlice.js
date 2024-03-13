import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    mode: [true],
  },
  reducers: {
    darkLight: (state, action) => {
        state.mode = !state.mode;
    },
  },
});


export default darkModeSlice.reducer;
export const { darkLight } = darkModeSlice.actions;
