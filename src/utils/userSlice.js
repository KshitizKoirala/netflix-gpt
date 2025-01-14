import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
      //   state.userInfo.email = action.payload.email;
    },
    removeUser: (state, action) => {
      return { userInfo: null };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
