import { useFormik } from "formik";
import React from "react";

export default function FormDemo1() {
  const initialvalue = {

      firstName : '',
      lastName : '',
      email : '',
  }
  const formik = useFormik({initialValues: initialvalue});

  console.log("form values ", formik.values);
  return (
    <>
      <h2 className="text-center bg-dark p-2 text-light">Form Demo</h2>
      <div className="container">
        <form>
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
