import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "./redux/action/counterAction";

function App() {
  const dispatch = useDispatch();
  // Dispatch => fire action
  // useSelector => sử dụng biến lưu trong reducer
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      {" "}
      {/* Fire action */}{" "}
      <div className="">
        Count: {count}{" "}
        <button onClick={() => dispatch(increaseCounter())}>
          {" "}
          Increase Count{" "}
        </button>{" "}
        <button onClick={() => dispatch(decreaseCounter())}>
          {" "}
          Increase Count{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
