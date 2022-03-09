import React from "react";
import { FormikProps, Formik } from "formik";

interface MyValues {
  email: string;
  name: string;
  channel: string;
}

const intialValue = {
  name: "",
  email: "",
  channel: "",
};

//submitHandler
const submitHandler = (values: MyValues) => {
  console.log("check submit handler");
  console.log(values);
  changeHandler(values);
  //   alert(JSON.stringify(values))

  validateForm(values);
};

//onChange handler
const changeHandler = (values: MyValues) => {
  console.log("getting value here", values);
};

//validate part:-must return object
const validateForm = (values: MyValues) => {
  // values.name, value.email, value.channel
  //error. name, errors.email, errors.cahnnal
  //errors.name="this field is required"

  const errors = {
    name: "",
    email: "",
    channel: "",
  };

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(values.email)){
    errors.email = "Invalid email";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};
const hellocheck =()=>{}

const Form = () => {
  // console.log("check validateion=>",validate);

  //   const initialValues = useFormik<{ name: string; }>({
  //       initialValues:{
  //           name:""
  //       }
  //   })
  return (
    <div>
      <Formik<MyValues>
        initialValues={intialValue}
        onSubmit={submitHandler}
        validate={validateForm}
        // handleBlur={hellocheck}
        component={RegistrationForm}
      />
    </div>
  );
};

let RegistrationForm: (props: FormikProps<MyValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors,
  touched
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.name  && errors.name ? <div className="error">{errors.name}</div> : null}
      </div>
      <div className="from-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
        {touched.email && errors.email ? <div className="error">{errors.email}</div>:null}
      </div>
      <div className="from-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          value={values.channel}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          {/* {errors.name ? <div className="error">{errors.name}</div> : null} */} 
        { touched.channel && errors.channel ? <div className="error">{errors.channel}</div>:null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
