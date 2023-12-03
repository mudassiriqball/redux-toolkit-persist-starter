import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// 
import { AppDispatchT, RootStateI } from "./types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchT>();
export const useAppSelector: TypedUseSelectorHook<RootStateI> = useSelector;

// Dynamic store import
export const getStore = async () => {
  const { store } = await import('./index');
  return store;
};