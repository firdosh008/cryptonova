import { AppDispatch, AppStore, makeStore, RootState, wrapper } from "./store";

import { useDispatch, useSelector } from "react-redux";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export {
  makeStore,
  useAppDispatch,
  useAppSelector,
  wrapper,

};

export type { AppDispatch, AppStore};
