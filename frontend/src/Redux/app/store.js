import { configureStore } from "@reduxjs/toolkit";
import userReducer from "Redux/Slices/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
