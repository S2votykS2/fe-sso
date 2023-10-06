import "./HomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "../../redux/action/counterAction";

function HomePage() {
  const dispatch = useDispatch();
  // Dispatch => fire action
  // useSelector => sử dụng biến lưu trong reducer
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="homepage-container">
      {" "}
      {/* Fire action */} <div className="title"> TEST </div>{" "}
      <div className="test-redux">
        Count: {count}{" "}
        <button onClick={() => dispatch(increaseCounter())}>
          {" "}
          Increase Count{" "}
        </button>{" "}
        <button onClick={() => dispatch(decreaseCounter())}>
          {" "}
          Decrease Count{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default HomePage;
