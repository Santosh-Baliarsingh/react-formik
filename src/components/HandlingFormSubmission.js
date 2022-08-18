import { useFormik } from "formik";
import React from "react";

export default function HandlingFormSubmission() {
  const initialvalue = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const formik = useFormik({
    initialValues: initialvalue,
    onSubmit: (values) => {
        console.log('Form Data', values);
    },
  });

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
            value={formik.values.firstName}
            id="firstName"
            className="form-control w-50"
            type="text"
          />
          <label htmlFor="lastName" className="form-label fw-bold">
            Last Name
          </label>
          <input
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="form-control w-50"
            type="text"
          />
          <label htmlFor="email" className="form-label fw-bold">
            Email ID
          </label>
          <input
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control w-50 mb-3"
            type="email"
          />
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
