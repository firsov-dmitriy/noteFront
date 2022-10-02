import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  field: "",
  type: "",
  search: "",
};

export const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    setField(state, action) {
      state.field = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setField, setSearch, setType } = sortSlice.actions;
export default sortSlice.reducer;
