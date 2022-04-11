import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
  reducer: {
    //state.counter - field
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(apiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
