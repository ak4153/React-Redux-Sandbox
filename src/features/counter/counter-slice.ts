import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 6
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    addXtoCounter(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});

export const { incremented, decremented, addXtoCounter } = counterSlice.actions;
export default counterSlice.reducer;

//Create Slice API
