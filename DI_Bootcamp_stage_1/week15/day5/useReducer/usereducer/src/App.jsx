import { useState, useReducer } from "react";
import "./App.css";

export const initialState = {
  count: 10,
  text: "bla bla bla",
  task: [],
};
/**
 * @param
 * state - initialState
 * action - {}
 */
export const countReducer = (state, action) => {
  console.log(action);
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === "DECREMENT") {
  //   return { ...state, count: state.count - 1 };
  // } else if (action.type === "ADD_NUM") {
  //   return { ...state, count: state.count + action.payload + action.numtoadd };
  // }
  // return state;
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  /** @param function- reducer,  state- initialState  */
  const [statecounter, dispatcounter] = useReducer(countReducer, initialState);

  return (
    <>
      <div>
        <h2>useState</h2>
        <button onClick={() => setCount((prev) => prev + 1)}> + </button>
        {count}
        <button onClick={() => setCount((prev) => prev - 1)}> - </button>
        <hr />
        <h2>useReducer</h2>
        <button onClick={() => dispatcounter({ type: "INCREMENT" })}>
          {" "}
          +{" "}
        </button>
        {statecounter.count}
        <button onClick={() => dispatcounter({ type: "DECREMENT" })}>
          {" "}
          -{" "}
        </button>
        <br />
        <button
          onClick={() =>
            dispatcounter({ type: "ADD_NUM", payload: 2, numtoadd: 7 })
          }
        >
          {" "}
          Add 2{" "}
        </button>
      </div>
      {statecounter.text}
    </>
  );
}

export default App;