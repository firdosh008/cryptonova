import { configureStore } from "@reduxjs/toolkit/react";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
  return configureStore({
    reducer: {},
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const wrapper = createWrapper<AppStore>(makeStore);
