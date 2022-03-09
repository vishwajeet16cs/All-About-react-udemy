import {
  FormikProps,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField
} from "formik";
import * as Yup from "yup";

import TextError from "../UI/TextError";

interface MyValues {
  email: string;
  name: string;
  channel: string;
  comments: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNumbers: string[];
}

const intialValue = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

//submitHandler
const submitHandler = (values: MyValues) => {
  console.log("check submit handler");
  console.log(values);
  changeHandler(values);
};

//onChange handler
const changeHandler = (values: MyValues) => {
  //   console.log("getting value here", values);
  return values;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
//   comments: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const validateComments = (values:string) =>{
    let error
    if(!values){
        error = 'Required'
    }
    return error
}

const FormComp = () => {
  // console.log(values);

  return (
    <div>
      <Formik<MyValues>
        initialValues={intialValue}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        component={RegistrationForm}
        validateOnChange={false}
        // validate={validateComments}
        // validateOnBlur={false}
      />
    </div>
  );
};

let RegistrationForm: (props: FormikProps<MyValues>) => JSX.Element = (props) => {
    console.log("props->",props);
  return (
    <>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="from-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMs) => <div className="error">{errorMs}</div>}
          </ErrorMessage>
        </div>

        <div className="from-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="from-control">
          <label htmlFor="comments">comments</label>
          <Field as="textarea" id="comments" name="comments" validate={validateComments}/>
          <ErrorMessage name="comments" component={TextError} />
        </div>

        {/* Address Field */}
        <div className="from-control">
          <label htmlFor="address">Address</label>
          <FastField name="address">
            {(props: {
              field: {};
              form: {};
              meta: { touched: {}; errors: {}; error: {} };
            }) => {
              const { field, meta } = props;
              //   {..field}->take care of name, value,handleChange, handleBlur
              return (
                <div>
                  <input type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>

        {/* social */}
        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter profile</label>
          <Field type="text" id="twiteer" name="social.twiteer" />
        </div>

        {/* Array of phone number */}
        <div className="form-control">
          <label htmlFor="primaryPh">Primary phone number</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary phone number</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>

        {/* Array Field */}
        <div className="from-control">
          <label htmlFor=" ">List of phone numbers</label>
          <FieldArray name="phNumbers">{(fieldArrayProps:{push:any,remove:any,form:{values:{phNumbers:[]},errors:{}}})=>{
              const {push,remove,form} = fieldArrayProps
              const {values,errors} = form
              console.log(errors);
            //   console.log(form);
              const {phNumbers} = values
              return <>
                {phNumbers.map((phNumber,index)=>{
                    return(
                    <div key={index}>
                        <Field name={`phNumbers[${index}]`}/>
                        { index >=  1 && <button type="button" onClick={()=>remove(index)}>-</button>}
                        <button type="button" onClick={()=>push('')}>+</button>
                    </div>
                    )
                })}
              </>
              }}</FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default FormComp;
