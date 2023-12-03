import { createSlice } from "@reduxjs/toolkit";
// 
import { loginApi, signupApi } from "./thunk";
import { AuthReducerI } from "./types";

const initialState: AuthReducerI = {
  // Login/Signup
  loading: false,
  success: null,
  error: undefined,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginApi.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = undefined;
      })
      .addCase(loginApi.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
        state.error = undefined;
      })
      .addCase(loginApi.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = null;
        state.error = payload;
      });

    // Signup
    builder
      .addCase(signupApi.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = undefined;
      })
      .addCase(signupApi.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
        state.error = undefined;
      })
      .addCase(signupApi.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = null;
        state.error = payload;
      });
  },
  reducers: {
    resetAuthState(state) {
      state.loading = false;
      state.success = null;
      state.error = undefined;
    }
  },
});

// Action creators are generated for each case reducer function
export const { resetAuthState } = slice.actions;
export default slice.reducer;
