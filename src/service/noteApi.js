import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://note-test-2022.herokuapp.com/api",
  }),
  tagTypes: ["note"],
  endpoints: (build) => ({
    getNotes: build.query({
      query: (arg) => ({
        params: { ...arg },
        url: "/note",
      }),
      providesTags: ["note"],
    }),
    addNote: build.mutation({
      query: (note) => ({
        body: note,
        method: "POST",
        url: "/note",
      }),
      invalidatesTags: ["note"],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation, useLazyGetNotesQuery } =
  noteApi;
