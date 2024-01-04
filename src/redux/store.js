import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from "../service/noteApi";
import sortReducer from "./sortSlice";
import notesSlice from "./notesSlice";

export const store = configureStore({
  reducer: { [noteApi.reducerPath]: noteApi.reducer, sort: sortReducer , notes : notesSlice},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
