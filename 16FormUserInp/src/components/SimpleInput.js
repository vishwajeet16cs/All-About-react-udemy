

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(value => value.trim() !== '');
  /* passing a fun as argument which will execute in use-input.js file when it is call */
  
  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmailInput
  } =useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // console.log("button disable check check")

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();

    resetEmailInput();
  };

  const nameInputClasses = nameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* {console.log("ui part")} */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        { nameInputError &&
          <p className="error-text">Name must not be empty.</p>
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputError && (
          <p className="error-text">Please Enter valid E-Mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
