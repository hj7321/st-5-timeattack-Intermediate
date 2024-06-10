// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ todos }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return todos.map((todo) => (
    <li
      key={todo.id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.content}</p>
      </section>
      <section>
        <button onClick={() => handleToggle(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => handleDelete(todo.id)}>삭제</button>
      </section>
    </li>
  ));
}
