import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  // const data=props.input
  // console.log(data)
  // const check=props.input.type
  // console.log(check)
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;