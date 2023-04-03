import { useReducer } from "react";
import { Link } from "react-router-dom";
//useReducer

export const Counter = () => {
  const initialState = { count: 0 };

  type CounterState = {
    count: number;
  };

  //Something like useState, instead of statestate,
  // the setState is replaced with a function called dispatch

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: CounterState, action: string): CounterState {
    switch (action) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  return (
    <div>
      <h2>Hello this is your count: {state.count} </h2>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <br></br>
      <Link to="/">Go to main page</Link>
    </div>
  );
};
