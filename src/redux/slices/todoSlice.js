// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      title: "리액트 공부",
      content: "리액트 심화 강의 듣기",
      isDone: false,
      id: 1,
    },
    {
      title: "개인 과제",
      content: "리액트 심화 개인 과제 하기",
      isDone: false,
      id: 2,
    },
    {
      title: "리액트 공부",
      content: "리액트 숙련 강의 듣기",
      isDone: true,
      id: 3,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    toggleTodo: (state, action) => {
      state.todo = state.todo.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
