import React from "react";
import { FormikProps, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import TextError from '../../UI/TextError'

interface MyValues {
  email: string;
  name: string;
  channel: string;
  comments: string;
  address: string;
}

const intialValue = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
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
  comments: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
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

let RegistrationForm: (props: FormikProps<MyValues>) => JSX.Element = () => {
  return (
    <Form>
      <div>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component={TextError}/>
      </div>
      <div className="from-control">
        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email">{errorMs=><div className="error">{errorMs}</div>}</ErrorMessage>
      </div>
      <div className="from-control">
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" component={TextError} />
      </div>
      <div className="from-control">
        <label htmlFor="comments">comments</label>
        <Field as="textarea" id="comments" name="comments" />
        <ErrorMessage name="comments" component={TextError} />
      </div>
      <div className="from-control">
        <label htmlFor="address">Address</label>
        <Field name="address">
          {(props: { field: {}; form: {}; meta: {touched:{},errors:{},error:{}} }) => {
            const { field, meta } = props;

            //   {..field}->take care of name, value,handleChange, handleBlur
            return (
              <div>
                <input type="text" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div>:null}                
              </div>
            );
          }}
        </Field>
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default FormComp;
