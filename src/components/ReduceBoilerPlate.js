import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function ReduceBoilerPlate() {
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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h2 className="text-center text-light bg-dark p-2">
        Reduce BoilerPlate Of Form using Formik getFieldProps Method 
      </h2>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName" className="form-label fw-bold">
            First Name
          </label>
          <input
            name="firstName"
            {...formik.getFieldProps('firstName')}
            id="firstName"
            className="form-control w-50"
            type="text"
          />
          {formik.touched.firstName && (
            <p className="text-danger fw-bold">{formik.errors.firstName}</p>
          )}
          <label htmlFor="lastName" className="form-label fw-bold">
            Last Name
          </label>
          <input
            name="lastName"
            id="lastName"
            {...formik.getFieldProps('lastName')}
            className="form-control w-50"
            type="text"
          />
          {formik.touched.lastName && (
            <p className="text-danger fw-bold">{formik.errors.lastName}</p>
          )}
          <label htmlFor="email" className="form-label fw-bold">
            Email ID
          </label>
          <input
            name="email"
            id="email"
            {...formik.getFieldProps('email')}
            className="form-control w-50 mb-3"
            type="email"
          />
          {formik.touched.email && (
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
