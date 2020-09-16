import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function HookReducerTwo() {
  const [counter1, dispatch1] = useReducer(reducer, initialState);
  const [counter2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div>
        <b>Counter One:</b> {counter1.count}
        <br />
        <button onClick={() => dispatch1({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch1({ type: "increment" })}>+</button>
        <button onClick={() => dispatch1({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <b>Counter Two:</b> {counter2.count}
        <br />
        <button onClick={() => dispatch2({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch2({ type: "increment" })}>+</button>
        <button onClick={() => dispatch2({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default HookReducerTwo;
