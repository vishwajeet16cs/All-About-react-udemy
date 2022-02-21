import { useReducer } from "react";
// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};

const useBasic = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer,
    initialInputState);

//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    //   console.log(event.target.value)
    dispatch({type: 'INPUT', value:event.target.value});
    // setEnteredValue(event.target.value);
};

const inputBlurHandler = (event) => {
    // console.log("blur check");
    dispatch({type: 'BLUR'});
    // setIsTouched(true);
  };

  const reset = () => {

    dispatch({type:"RESET"})
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useBasic;
