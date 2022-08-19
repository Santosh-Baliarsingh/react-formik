import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikComponents() {
  // Initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  //onSubmit Function
  const onSubmit = (values) => {
    console.log("Form Data", values);
  };

  // Yup Schema validation
  const validationSchema = Yup.object({
    // Defining Validation Object Schema
    firstName: Yup.string().required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    email: Yup.string()
      .email("Invalid Email Format!")
      .required("Email is Required!"),
  });
  
  return (
    <>
      <h2 className="text-center text-light bg-dark p-2">
        Code Refactoring For Formik Components
      </h2>
      <div className="ms-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label htmlFor="firstName" className="form-label fw-bold">
                First Name
              </label>
              <Field
                name="firstName"
                id="firstName"
                className="form-control w-50"
                type="text"
              />
              <p className="text-danger fw-bold">
                <ErrorMessage name="firstName" />
              </p>
            </div>
            <div>
              <label htmlFor="lastName" className="form-label fw-bold">
                Last Name
              </label>
              <Field
                name="lastName"
                id="lastName"
                className="form-control w-50"
                type="text"
              />
              <p className="text-danger fw-bold">
                <ErrorMessage name="lastName" />
              </p>
            </div>
            <div>
              <label htmlFor="email" className="form-label fw-bold">
                Email ID
              </label>
              <Field
                name="email"
                id="email"
                className="form-control w-50 mb-3"
                type="email"
              />
              <p className="text-danger fw-bold">
                <ErrorMessage className="" name="email" />
              </p>
            </div>

            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

// Note :-
// First - Import 'Formik , Form , Field , ErrorMessage' Component form Formik Library
// Second - Make "Formik" a Wrapper Class and place your 'Html Form' inside Of it
// Third - Place initialValues , validateSchema and onSubmit inside Formik wrapper class
// Fourth - Replace "html-Form" to "Form" and "html-input" to "Field"
// Fifth - Add ErrorMessage Component and add name attribute present in Field Componenet
