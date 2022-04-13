import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import {
  dogApiSlice,
  dogByNameApiSlice
} from "../features/dogs/dogs-api-slice";

export const store = configureStore({
  reducer: {
    //state.counter - field
    counter: counterReducer,
    [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    [dogByNameApiSlice.reducerPath]: dogByNameApiSlice.reducer
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(
      dogApiSlice.middleware,
      dogByNameApiSlice.middleware
    );
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
