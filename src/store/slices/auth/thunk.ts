import { createAsyncThunk } from "@reduxjs/toolkit";
// 
import { LoginBodyParamsI, LoginResT, SignupBodyParamsI, SignupResT } from "./types";
import { postRequest } from "../../../helpers/apiHelper";
import { ApiErrorResT } from "../../../helpers/apiHelper/types";
import URLs from "../../../helpers/apiHelper/urls";

export const loginApi = createAsyncThunk<LoginResT, LoginBodyParamsI, { rejectValue: ApiErrorResT }>("auth/loginApi", (data, thunkApi) => {
  return postRequest({ url: URLs.login, thunkApi, data });
});

export const signupApi = createAsyncThunk<SignupResT, SignupBodyParamsI, { rejectValue: ApiErrorResT }>("auth/signupApi", (data, thunkApi) => {
  return postRequest({ url: URLs.signup, thunkApi, data });
});