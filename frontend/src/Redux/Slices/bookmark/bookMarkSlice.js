import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookMark: [],
};

const bookMarkSlice = createSlice({
  name: "bookMark",
  initialState,
  reducers: {
    addBookMark: (state, { payload }) => {
      state.bookMark.push(payload);
    },
    removeBookMark: (state, { payload }) => {
      state.bookMark = state.bookMark.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBookMark, removeBookMark } = bookMarkSlice.actions;

export const selectBookMark = (state) => state.bookMark.bookMark;

export default bookMarkSlice.reducer;
