// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    subtractNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, subtractNumber } = calculatorSlice.actions;
export default calculatorSlice.reducer;
