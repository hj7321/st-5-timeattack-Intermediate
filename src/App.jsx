import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNumber, subtractNumber } from "./redux/slices/calculatorSlice";
import { useState } from "react";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [inputNum, setInputNum] = useState("");
  const number = useSelector((state) => state.calculator.number);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={inputNum}
          onChange={(e) => setInputNum(+e.target.value)}
        />{" "}
        만큼을{" "}
        <button
          onClick={() => {
            dispatch(addNumber(inputNum));
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            dispatch(subtractNumber(inputNum));
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;
