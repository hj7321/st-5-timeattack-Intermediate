import { addTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const title = data.get("title");
    const content = data.get("content");

    if (!title.trim() || !content.trim())
      return alert("제목과 내용을 모두 입력해주세요.");

    const newTodo = { title, content, isDone: false, id: crypto.randomUUID() };
    dispatch(addTodo(newTodo));

    e.target.reset();
  };

  return (
    <form onSubmit={handleAdd}>
      <label>제목: </label>
      <input type="text" name="title" /> <label>내용: </label>
      <input type="text" name="content" />
      <button type="submit">추가</button>
    </form>
  );
}
