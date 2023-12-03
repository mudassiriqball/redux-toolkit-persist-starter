import { ThunkAction, Action } from '@reduxjs/toolkit';
//
import { ApiErrorResT } from '../helpers/apiHelper/types';
import { store } from './index';

// Reducers
import { AuthReducerI } from './slices/auth/types';
import { UserReducerI } from './slices/user/types';

export type AppDispatchT = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateI,
  unknown,
  Action<string>
>;

// NOTE: Whenever new reducer will added then it's types should be added here.
export interface RootStateI {
  auth: AuthReducerI;
  user: UserReducerI;
};

export interface ReducerDefaultI {
  loading: boolean;
  error: ApiErrorResT;
};