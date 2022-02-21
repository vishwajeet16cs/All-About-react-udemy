import useBasic from "../hooks/use-basic";

const isNotEmpty = value =>value.trim() !==""
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useBasic(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useBasic(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useBasic((value) => value.includes("@"));
// console.log("email here",enteredEmail)1

  let formIsValid = true;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("submit ")
    if (!resetFirstNameInput) {
      return;
    }
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = firstNameInputError
    ? "form-control invalid"
    : "form-control";
  
    const lastnameInputClasses = lastNameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* {console.log(formIsValid)} */}
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={enteredFirstName}
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputError && <p>Invalid First name</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputError && <p>Invalid Last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputError && <p>Invalid email</p>}
      </div>
      <div className="form-actions">
        <button type='submit' disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
