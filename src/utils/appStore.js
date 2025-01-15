import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";

export const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
  },
});
