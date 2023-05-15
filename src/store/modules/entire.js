import { createSlice } from "@reduxjs/toolkit";

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    data: [],
  },
  reducers: {
    setEntire: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { setEntire } = entireSlice.actions;
export default entireSlice.reducer;