import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function NestedObjects() {
  // Initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    // Nested Object Properties
    social: {
      facebook: "",
      twitter: "",
    },
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
        Formik Nested Object
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
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-danger fw-bold"
              />
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
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-danger fw-bold"
              />
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
              <ErrorMessage
                name="email"
                component="p"
                className="text-danger fw-bold"
              />
            </div>
            <div>
              <label htmlFor="comments" className="form-label fw-bold">
                Leave Comments :
              </label>
              <Field
                name="comments"
                id="textarea"
                style={{ height: "100px" }}
                className="form-control w-50 mb-3"
                as="textarea"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="facebook" className="form-label fw-bold">
                Facebook Handle
              </label>
              <div className="input-group w-25">
                <span className="input-group-text">
                  <i className="bi bi-facebook" style={{color : '#1877F2'}}></i>
                </span>
                <Field
                  name="social.facebook"
                  id="facebook"
                  className="form-control "
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="twitter" className="form-label fw-bold">
                Twitter Handle
              </label>
              <div className="input-group w-25">
                <span className="input-group-text">
                  <i className="bi bi-twitter" style={{color : '#1D9BF0'}}></i>
                </span>
                <Field
                  name="social.twitter"
                  id="twitter"
                  className="form-control"
                />
              </div>
            </div>

            <button className="btn btn-success mb-3" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

// Note :-
// Whenever we make to group the data together then we use Nested Object in Formik
// Whenever you use Nested Object then write name attribute like ( social.facebook) i used above
