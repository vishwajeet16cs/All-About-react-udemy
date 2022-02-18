import React, { useState, useContext, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';


const emailReducer = (state,actions) => {
  if(actions.type==="USER_INPUT"){
    return {value: actions.val, isValid: actions.val.includes('@')};
  }
  if(actions.type==="INPUT_BLUR"){
    return {value: state.value,isValid: state.value.includes('@')}
  }
  return {value: '',isValid: false}
}

const passwordReducer=(state,action)=>{
  if(action.type==="USER_INPUT"){
    console.log(action.val.trim())
    return {value:action.val, isValid:action.val.trim().length > 6}
  }
  if(action.type==="INPUT_BLUR"){
    return {value:state.value, isValid:state.value.trim().length>6}
  }
  return {value:state.value, isValid:false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{value:'', isValid:null})
  const [passwordState,dispatchPassword]=useReducer(passwordReducer,{value:'', isValid:null})

  const Ctx= useContext(AuthContext)

  // useEffect(()=>{
  //   const identifier = setTimeout(()=>{
  //     // console.log("inside time out")
  //     setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   );
  //   },1000)

  //   return ()=>{
  //     // console.log("clean up function")
  //     clearTimeout(identifier)
  //   };
  // },[enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val:event.target.value})

    setFormIsValid(
          event.target.value.includes('@') && passwordState.isValid
        );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"USER_INPUT",val:event.target.value})
    setFormIsValid(
          emailState.isValid && event.target.value.trim().length > 6
        );
    
  };

  const validateEmailHandler = () => {
    console.log("Blur check")
    dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.trim().length > 6);
    dispatchPassword({type:"INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <h6>{JSON.stringify(emailState)}</h6>
      <h6>{JSON.stringify(passwordState)}</h6>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
