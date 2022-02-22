import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {

  const dispatch = useDispatch()

  // data change in store it will re-Render the component
  const counter = useSelector((state) => {
    // console.log(state.counter.counter)
    return state.counter.counter
  });
  // console.log(counter)


  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    /* {type:SOME_UNIQUE_IDENTIFIER, payload: 10} */
    dispatch(counterActions.increase(10))
  }
  
  const decrementHandler = () => {
    // console.log("decr")
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      {/* <h1>{counter}</h1> */}
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
