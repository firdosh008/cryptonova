import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import themeReducer from '../reducer/themeReducer';
import watchlistReducer from '../slices/watchlistSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      watchlist: watchlistReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore);
