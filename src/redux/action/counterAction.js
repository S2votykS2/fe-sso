export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

// Tạo các ActionType và function khi action được fire
export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
