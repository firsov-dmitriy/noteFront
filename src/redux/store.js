import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from "../service/noteApi";
import sortReducer from "./sortSlice";

export const store = configureStore({
  reducer: { [noteApi.reducerPath]: noteApi.reducer, sort: sortReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
