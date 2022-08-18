import React from "react";
import { useFormik } from "formik";

export default function FormvalidationFunction() {
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

  //Validation Function
  const validate = (values) => {

    let errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is Required!";
    }
    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Must be a valid email address!";
    }

    return errors;
  };

  //UseFormik Hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("visitd Fields", formik.touched);
  return (
    <>
      <h2 className="text-center text-light bg-dark p-2">
        Handling Form Submission in Formik
      </h2>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName" className="form-label fw-bold">
            First Name
          </label>
          <input
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            id="firstName"
            className="form-control w-50"
            type="text"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-danger fw-bold">{formik.errors.firstName}</p>
          )}
          <label htmlFor="lastName" className="form-label fw-bold">
            Last Name
          </label>
          <input
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="form-control w-50"
            type="text"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-danger fw-bold">{formik.errors.lastName}</p>
          )}
          <label htmlFor="email" className="form-label fw-bold">
            Email ID
          </label>
          <input
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control w-50 mb-3"
            type="email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger fw-bold">{formik.errors.email}</p>
          )}
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
