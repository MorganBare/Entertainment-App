import { configureStore } from "@reduxjs/toolkit";
import userReducer from "Redux/Slices/user/userSlice";
import bookMarkReducer from "Redux/Slices/bookmark/bookSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    bookMark: bookMarkReducer,
  },
});
