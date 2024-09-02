import { inc, dec, rnd, clr } from "../action.js";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => {
    return {
      counter: state.counter,
    };
  });
  const dispatch = useDispatch();

  return (
    <div className="jumbotron" style={{ marginLeft: "20px" }}>
      <h1 className="m-4">{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary m-2">
        Decr
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary m-2">
        Incr
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary m-2">
        Rand
      </button>
      <button onClick={() => dispatch(clr())} className="btn btn-primary m-2">
        Clear
      </button>
    </div>
  );
};

export default Counter;
