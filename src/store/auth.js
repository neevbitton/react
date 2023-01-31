import { createSlice } from "@reduxjs/toolkit";


const initalAuthState = {
  loggedIn: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
      state.userData = {};
    },
    updateUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
