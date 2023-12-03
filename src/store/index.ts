import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// 
import * as reducers from "./slices";
import { RootStateI } from "./types";

const combinedReducer = combineReducers(reducers);
const rootReducer = (state: RootStateI | undefined, action: { type: string }) => {
  // on logout
  if (action?.type === "user/logout") {
    state = undefined; // Removing the all states in redux

    // if you want to keep any slide's state then you can add it below, then it will be not get removed on logout
    // state = {
    //   user: state?.user,
    // } as RootStateI;
  };

  return combinedReducer(state, action as never);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'] // Add more if you want to persist the slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);