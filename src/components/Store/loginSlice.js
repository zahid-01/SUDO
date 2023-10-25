import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
};

const loginSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setLogin(state, actions) {
      state.isLoggedIn = actions.payload;
    },
    setUserInfo(state, actions) {
      state.userInfo = actions.payload;
    },
  },
});

export const loginSliceActions = loginSlice.actions;
export default loginSlice;
