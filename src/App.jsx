import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        -1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(incrementBy(4))}
      >
        +x
      </button>
    </div>
  );
}

export default App;
