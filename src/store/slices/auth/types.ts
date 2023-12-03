import { ReducerDefaultI } from "../../types";
import { UserI } from "../user/types";

// User Reducer Interface
export interface AuthReducerI extends ReducerDefaultI {
  success: LoginResT | SignupResT | null;
};

// Login Body Params
export interface LoginBodyParamsI {
  email: string;
  password: string
};
// Login API Response
export type LoginResT = UserI;

// Signup Body Params
export interface SignupBodyParamsI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
// Signup API Response
export type SignupResT = UserI;