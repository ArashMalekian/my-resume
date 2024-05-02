const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  name: "Arash",
  surname: "Malekian",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
});

export default dataSlice;
