import React from "react";
import { useFormik, FormikProps, Formik } from "formik";

interface MyValues {
  email: string;
  name: string;
  channal: string;
}

const Form = () => {
  const changeHandler = () => {
    console.log("hello check");
  };
  return (
    <div>
      <Formik<MyValues>
        initialValues={{
          name: "",
          email: "",
          channal: "",
        }}
        //  onSubmit={submitHandler}
        onSubmit={(values) => {
            changeHandler();
          alert(JSON.stringify(values))
        }}
        component= {RegistrationForm}
      />
    </div>
  );
};

let RegistrationForm: (props: FormikProps<MyValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  setFieldValue,
}) => {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channal"
          value={values.channal}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
};

export default Form;
