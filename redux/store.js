const { configureStore } = require("@reduxjs/toolkit");
const { default: dataSlice } = require("./features/data/data");

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
