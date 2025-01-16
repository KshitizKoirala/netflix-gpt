import { configureStore } from "@reduxjs/toolkit";

import gptSliceReducer from "./gptSlice";
import configSliceSliceReducer from "./configSlice";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";

export const appStore = configureStore({
  reducer: {
    config: configSliceSliceReducer,
    user: userSliceReducer,
    movies: moviesSliceReducer,
    gpt: gptSliceReducer,
  },
});
