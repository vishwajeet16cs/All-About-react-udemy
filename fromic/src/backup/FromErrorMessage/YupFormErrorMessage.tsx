import React from "react";
import { FormikProps, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
};

//onChange handler
const changeHandler = (values: MyValues) => {
  console.log("getting value here", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const FormComp = () => {
  return (
    <div>
      <Formik<MyValues>
        initialValues={intialValue}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        component={RegistrationForm}
      />
    </div>
  );
};

let RegistrationForm: (props: FormikProps<MyValues>) => JSX.Element = ({
  errors,
  touched,
  getFieldProps,
}) => {
  return (
    <Form>
      <div>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
      </div>
      <div className="from-control">
        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />
      </div>
      <div className="from-control">
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default FormComp;
