import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ isDone }) {
  const todo = useSelector((state) => state.todo.todo);

  const filteredTodos = todo.filter((todo) => todo.isDone === isDone);

  return (
    <section>
      <h2>{isDone ? "Done!" : "Working..."}</h2>
      <ul>
        <TodoItem todos={filteredTodos} />
      </ul>
    </section>
  );
}
