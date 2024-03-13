import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: [],
  },
  reducers: {
    addRegisterEntry: (state, action) => {
      const { phoneNumber } = action.payload;
      const existingPhoneNumber = state.data.find(entry => entry.phoneNumber === phoneNumber);
      if (!existingPhoneNumber) {
        state.data.push({ phoneNumber });
      }
    },
  },
});


export default registerSlice.reducer;
export const { addRegisterEntry } = registerSlice.actions;
