import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 
import { UserI, UserReducerI } from "./types";

const initialState: UserReducerI = {
  user: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout() {},
    setUserState(state, { payload }: PayloadAction<UserI>) {
      state.user = payload;
    },
    resetUserState(state) {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetUserState, setUserState, logout } = slice.actions;
export default slice.reducer;
