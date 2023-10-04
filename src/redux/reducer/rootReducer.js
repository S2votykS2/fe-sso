import { combineReducers } from "redux";

import counterReducer from "./counterReducer";

// Export các reduce đã lưu trữ các biến của redux
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
